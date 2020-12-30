from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.houses import houses_bp
from server.error import CustomError


@houses_bp.route('/api/joined-houses')
@auth_required
def get_joined_houses():
    try:
        user = current_user()
        joined_houses = list(h.serialize() for h in user.houses)

        return jsonify(joined_houses)
    except Exception as e:
        u = user.username or 'unknown user'
        payload = {'meta': str(e)}
        
        raise CustomError(f"Failed to return houses for {u}", 500, payload)