from flask import jsonify, request, make_response
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp
from server.error import CustomError
from server.models import House, UserHouses
from server.extensions import db


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

            return '', 201

        else:
            data = {'message': 'House has already been created'}
            return make_response(jsonify(data), 200)

    except Exception as e:
        payload = {'meta': str(e)}

        raise CustomError("Failed to search houses", 500, payload)


    return jsonify(request_body)