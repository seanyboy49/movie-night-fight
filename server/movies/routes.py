from flask import jsonify, request, current_app, make_response
import requests
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp
from server.error import CustomError
from server.models import Movie, UserMovies
from server.extensions import db


@movies_bp.app_errorhandler(CustomError)
def invalid_api_usage(e):
    return jsonify(e.serialize()), e.status_code


@movies_bp.route('/api/watchlist', methods=["GET", "POST"])
@auth_required
def watchlist():
    user = current_user()

    if request.method == 'GET':
        unwatched = list(filter(lambda m: m.watched_at == None, user.watchlist))
        response = list(m.movie.serialize() for m in unwatched)

        return jsonify(response)

    # else, the request.method is POST
    request_body = request.get_json()

    if not request_body:
        raise CustomError("No movie provided in request body")

    try:
        # Only add the movie to db if it doesn't already exist
        request_omdb_id = request_body.get('omdb_id')
        if Movie.query.filter_by(omdb_id=request_omdb_id).count() < 1:
            new_movie = Movie(
                name=request_body.get('name'),
                omdb_id=request_body.get('omdb_id'),
                poster_url=request_body.get('poster_url'),
            )
            db.session.add(new_movie)

        # Check before adding movie to user's watchlist
        movie = Movie.query.filter_by(omdb_id=request_omdb_id).first()
        filtered = list(filter(lambda x: x.movie.omdb_id == movie.omdb_id, user.watchlist))
        if len(filtered) < 1:
            user.watchlist.append(UserMovies(movie))

        db.session.commit()
        data = {'message': 'Movie added to watchlist'}

        return make_response(jsonify(data), 201)
    # Generic error handler
    except Exception as e:
        payload = {'meta': str(e)}
        raise CustomError("Unable to add movie to watchlist", 500, payload)


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
