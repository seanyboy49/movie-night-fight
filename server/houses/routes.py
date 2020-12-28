from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp


@houses_bp.route('/api/joined-houses')
@auth_required
def get_joined_houses():
    try:
        user = current_user()
        print('user.houses', user.houses)

        return jsonify(user.houses)
    except Exception as e:
        return e