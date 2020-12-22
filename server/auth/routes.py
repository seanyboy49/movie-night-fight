from flask import request

from server.auth import auth_bp
from ..models import User
from ..extensions import db, guard


@auth_bp.route('/api/auth/login', methods=['POST'])
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

@auth_bp.route('/api/signup', methods=['POST'])
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


@auth_bp.route('/api/refresh', methods=['POST'])
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
