from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp
from server.error import CustomError
from server.models import House


@houses_bp.route('/api/joined-houses')
@auth_required
def get_joined_houses():
    try:
        user = current_user()
        print('hello', user.houses[0].house.users)
        joined_houses = list(h.house.serialize() for h in user.houses)
        print('')

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
