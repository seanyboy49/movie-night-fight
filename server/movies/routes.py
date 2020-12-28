from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp


@movies_bp.route('/api/watchlist')
@auth_required
def get_watchlist():
    try:
        user = current_user()
        unwatched = list(filter(lambda m: m.watched_at == None, user.watchlist))
        response = list(m.movie.serialize() for m in unwatched)

        return jsonify(response)

    except Exception as e:
        return e
