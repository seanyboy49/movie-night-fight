from flask import Blueprint, jsonify, request
from flask_cors import CORS

api = Blueprint('api', __name__)
# Enable CORS on api routes
CORS(api)

# Todo: create a route handler to authenticate requests


@api.route('/api/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        data = request.get_json()
        return jsonify(data)

    return jsonify('hello world')
