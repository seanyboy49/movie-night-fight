from flask import jsonify
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp

@movies_bp.route('/api/movies')
@auth_required
def get_movies():
    user = current_user()

    response = []
    unwatched = list(filter(lambda m: m.watched_at == None, user.watchlist))

    for user_movie in unwatched:
        movie = {
            'name': user_movie.movie.name,
            'omdb_id': user_movie.movie.omdb_id,
            'poster_url': user_movie.movie.poster_url
        }
        response.append(movie)

    return jsonify(response)
