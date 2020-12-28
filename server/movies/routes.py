from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp


def user_movie_to_dict(user_movie):
    return {
        'name': user_movie.movie.name,
        'omdb_id': user_movie.movie.omdb_id,
        'poster_url': user_movie.movie.poster_url
    }


@movies_bp.route('/api/movies')
@auth_required
def get_movies():
    try:
        user = current_user()
        unwatched = list(filter(lambda m: m.watched_at == None, user.watchlist))

        response = list(map(user_movie_to_dict, unwatched))

        return jsonify(response)

    except Exception as e:
        return e
