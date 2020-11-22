from flask import Blueprint, jsonify, request
from flask_cors import CORS
import flask_praetorian

from ..models import Post, User
from ..extensions import db, guard

api = Blueprint('api', __name__)
# Enable CORS on api routes
CORS(api)

# Todo: create a route handler to authenticate requests


@api.route('/api/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        form_content = request.get_json()
        new_post = Post(content=form_content)

        try:
            db.session.add(new_post)
            db.session.commit()

            return jsonify(form_content), 201

        except:
            return 'There was an issue adding your post', 400

    results = []
    all_posts = Post.query.all()
    for post in all_posts:
        results.append(post.content)

    return jsonify(results)


@api.route('/api/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
    $ curl http://localhost:5000/api/login -X POST \
        -d '{"username": "Sean", "password": "strongpassword"}'
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
    $ curl http://localhost:5000/api/refresh -X GET \
        -H "Authorization: Bearer <your_token>"
    """
    print('refresh request')
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    res = {'access_token': new_token}

    return res, 200


@api.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorate will require a header
    containing a valid JWT
    .. example::
    $ curl http://loclahost:5000/api/protected -X GET \
        -H "Authorization: Bearer <your_token>"
    """

    return {"message": f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}
