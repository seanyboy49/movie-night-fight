from flask import Blueprint, request, jsonify
from flask_cors import CORS
from flask_praetorian import auth_required, current_user

from ..models import User
from ..extensions import db, guard

api = Blueprint('api', __name__)
# Enable CORS on api routes
CORS(api)


@api.route('/api/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
    $ curl http://localhost:8000/api/login -X POST \
        -d '{"username": "sean", "password": "password"}'
    """

    req = request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')
    user = guard.authenticate(username, password)
    res = {'access_token': guard.encode_jwt_token(user)}

    return res, 200


@api.route('/api/signup', methods=['POST'])
def signup():
    """
    Signs a user up.
    """

    req = request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')

    # Check if user exists
    if db.session.query(User).filter_by(username=username).count() < 1:
        try:
            db.session.add(User(
                username=username,
                password=guard.hash_password(password),
                roles='user'
            ))
            db.session.commit()
            print('successfully added user')
        except:
            return "There was a problem signing up", 400

        user = guard.authenticate(username, password)
        res = {'access_token': guard.encode_jwt_token(user)}

        return res, 200

    else:
        return "That user already exists", 400


@api.route('/api/refresh', methods=['POST'])
def refresh():
    """
    Refreshes an existing JWT by creating a new one that is a copy of the old
    except that it has a refreshed access expiration.
    .. example::
    $ curl http://localhost:8000/api/refresh -X GET \
        -H "Authorization: Bearer <your_token>"
    """
    print('refresh request')
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    res = {'access_token': new_token}

    return res, 200


@api.route('/api/movies')
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



@api.route('/api/protected')
@auth_required
def protected():
    """
    A protected endpoint. The auth_required decorate will require a header
    containing a valid JWT
    .. example::
    $ curl http://localhost:8000/api/protected -X GET \
        -H "Authorization: Bearer <your_token>"
    """

    return {"message": f'protected endpoint (allowed user {current_user().username})'}
