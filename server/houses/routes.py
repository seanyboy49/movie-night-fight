from flask import jsonify, request, make_response
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp
from server.error import CustomError
from server.models import House, UserHouses
from server.extensions import db


@houses_bp.app_errorhandler(CustomError)
def invalid_api_usage(e):
    return jsonify(e.serialize()), e.status_code


@houses_bp.route('/api/joined-houses')
@auth_required
def get_joined_houses():
    try:
        user = current_user()
        joined_houses = list(h.house.serialize() for h in user.houses)

        return jsonify(joined_houses)
    except Exception as e:
        u = user.username or 'unknown user'
        payload = {'meta': str(e)}

        raise CustomError(f"Failed to return houses for {u}", 500, payload)


@houses_bp.route('/api/houses')
@auth_required
def search_houses():
    search_params = request.args.get('search')

    try:
        search_results = House.query.filter(House.name.ilike(f'%{search_params}%')).all()
        houses = list(h.serialize() for h in search_results)

        return jsonify(houses)
    except Exception as e:
        payload = {'meta': str(e)}

        raise CustomError("Failed to search houses", 500, payload)


@houses_bp.route('/api/houses', methods=["POST"])
@auth_required
def create_house():
    request_body = request.get_json()

    if request_body is None:
        raise CustomError("No house name provided in body")

    user = current_user()

    try:
        # Only create house if one of that name doesn't already exist
        if House.query.filter_by(name=request_body.get('name')).count() < 1:
            new_house = House(name=request_body.get('name'))
            db.session.add(new_house)
            user.houses.append(UserHouses(house=new_house, user_role="admin"))
            db.session.commit()

            return make_response(new_house.serialize()), 201

        else:
            data = {'message': 'House has already been created'}
            return make_response(jsonify(data), 200)

    except Exception as e:
        payload = {'meta': str(e)}

        raise CustomError("Failed to search houses", 500, payload)


@houses_bp.route('/api/houses/<house_id>/memberships', methods=["POST"])
@auth_required
def join_house(house_id):
    user = current_user()

    try:
        house_to_join = House.query.get(house_id)

        filtered = filter(lambda u: u.user.id == user.id, house_to_join.users)
        user_in_house = next(filtered, None)

        if user_in_house:
            raise Exception("User has already joined house")

        house_to_join.users.append(UserHouses(user=user))
        db.session.commit()

        return make_response(house_to_join.serialize()), 201

    except Exception as e:
        payload = {'meta': str(e)}

        raise CustomError("Failed to join house", 500, payload)


@houses_bp.route('/api/houses/<house_id>/memberships', methods=["DELETE"])
@auth_required
def leave_house(house_id):
    user = current_user()

    try:
        house_to_leave = House.query.get(house_id)
        user_with_role = next(filter(lambda u: u.user.id == user.id, house_to_leave.users), None)

        if user_with_role is None:
            raise Exception("User is not in house.")

        data = {}

        # If the user is the last person, delete the house
        if len(house_to_leave.users) <= 1:            
            house_to_leave.users.remove(user_with_role)
            db.session.delete(house_to_leave)
            data['message'] = f'Successfully left and deleted {house_to_leave.name}'

        # If the user is an admin, make someone else admin
        elif user_with_role.user_role == 'admin':
            house_to_leave.users.remove(user_with_role)
            filtered = filter(lambda u: u.user.id != user.id, house_to_leave.users)
            next_user = next(filtered, None)
            next_user.set_role('admin')
            data['message'] = f'Successfully left {house_to_leave.name}. {next_user.user.username} is now admin'

        # Otherwise, just leave the house
        else:
            house_to_leave.users.remove(user_with_role)
            data['message'] = 'Successfully left house'

        db.session.commit()
        return make_response(jsonify(data), 200)

    except Exception as e:
        payload = {'meta': str(e)}
        raise CustomError("Failed to leave house", 500, payload)
