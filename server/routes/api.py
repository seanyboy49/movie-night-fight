from flask import Blueprint, jsonify, request
from flask_cors import CORS

from ..models import Post
from ..extensions import db

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
