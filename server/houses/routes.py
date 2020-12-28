from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp


@houses_bp.route('/api/joined-houses')
@auth_required
def get_joined_houses():
    print('hi')

    return '200'