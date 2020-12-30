from flask import jsonify, request, current_app
import requests
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp
from server.error import CustomError


@movies_bp.app_errorhandler(CustomError)
def invalid_api_usage(e):
    return jsonify(e.serialize()), e.status_code


@movies_bp.route('/api/watchlist')
@auth_required
def get_watchlist():
    user = current_user()
    unwatched = list(filter(lambda m: m.watched_at == None, user.watchlist))
    response = list(m.movie.serialize() for m in unwatched)

    return jsonify(response)


@movies_bp.route('/api/movies')
@auth_required
def get_movies():
    api_key = current_app.config['OMDB_API_KEY']
    omdb_url = f"http://www.omdbapi.com/?apikey={api_key}"
    search_params = request.args.get('search')

    if not search_params:
        raise CustomError("No search params provided")

    try:
        response = requests.get(f"{omdb_url}&s={search_params}").json()
        return response
    except requests.exceptions.RequestException as e:
        payload = {'meta': str(e)}
        raise CustomError("Failed to query OMDB api", 503, payload)
