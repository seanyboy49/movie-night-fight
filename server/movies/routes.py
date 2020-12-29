from flask import jsonify, request
import requests
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


api_key = "40b0cafa"
omdb_url = f"http://www.omdbapi.com/?apikey={api_key}"


@movies_bp.route('/api/movies')
# @auth_required
def get_movies():
    search_params = request.args.get('search')

    try:
        response = requests.get(f"{omdb_url}&s={search_params}").json()

        return response

    except requests.exceptions.RequestException as e:
        print('e', e)
        return "Unable to query movie"
