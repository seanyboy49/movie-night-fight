from flask import Blueprint, jsonify
from flask_cors import CORS

api = Blueprint('api', __name__)
# Enable CORS on api routes
CORS(api)

# Todo: create a route handler to authenticate requests


@api.route('/api/hello')
def hello():
    return jsonify('hello world')
