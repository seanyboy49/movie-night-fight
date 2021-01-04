from flask import jsonify, request, current_app, make_response
import requests
from flask_praetorian import auth_required, current_user

from server.movies import movies_bp
from server.error import CustomError
from server.models import Movie, UserMovies, HouseTurns, House
from server.extensions import db


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


@movies_bp.route('/api/watchlist', methods=["POST"])
@auth_required
def add_to_watchlist():
    user = current_user()
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
        filtered = filter(lambda x: x.movie.omdb_id == movie.omdb_id, user.watchlist)
        movie_to_add = next(filtered, None)

        # If watchlist does not contain movie, add to watchlist
        if movie_to_add is None:
            user.watchlist.append(UserMovies(movie))
            db.session.commit()
            data = {'message': 'Movie added to watchlist'}

            return make_response(jsonify(data), 201)

        # If it IS in watchlist, but marked as watched, then nullify watched_at
        elif movie_to_add.watched_at is not None:
            movie_to_add.watched_at = None
            db.session.commit()
            data = {'message': 'Movie added to watchlist'}

            return make_response(jsonify(data), 201)

        # Otherwise, movie is already in watchlist
        data = {'message': 'Movie already added to watchlist'}
        return make_response(jsonify(data), 200)

    # Generic error handler
    except Exception as e:
        payload = {'meta': str(e)}
        raise CustomError("Unable to add movie to watchlist", 500, payload)


@movies_bp.route('/api/watchlist/<movie_id>', methods=["DELETE"])
@auth_required
def delete_from_watchlist(movie_id):
    user = current_user()
    movie_to_delete = next(filter(lambda m: m.movie_id == int(movie_id), user.watchlist), None)

    if movie_to_delete is None:
        return '', 204

    try:
        user.watchlist.remove(movie_to_delete)
        db.session.commit()

        return '', 204
    except Exception as e:
        payload = {'meta': str(e)}
        raise CustomError("Unable to remove movie from watchlist", 500, payload)


@movies_bp.route('/api/watchlist', methods=["PATCH"])
@auth_required
def mark_as_watched():
    movie_id = request.args.get('movieId')
    house_id = request.args.get('houseId')
    user = current_user()
    user_movie_to_patch = next(filter(lambda m: m.movie_id == int(movie_id), user.watchlist), None)
    movie = Movie.query.get(movie_id)
    house = House.query.get(house_id)
    print('user', user)

    if user_movie_to_patch is None:
        raise CustomError("Movie could not be found", 404)

    try:
        user_movie_to_patch.watched_at = db.func.current_timestamp()
        # db.session.add(HouseTurns(user=user, movie=movie, house=house))
        # db.session.commit()
        data = {'message': 'Movie marked as watched'}

        return make_response(jsonify(data), 201)
    except Exception as e:
        payload = {'meta': str(e)}
        raise CustomError("Unable to update movie as watched", 500, payload)


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
