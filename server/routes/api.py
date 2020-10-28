from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/api/hello')
def hello():
    print('hello world')
    return jsonify('hello world')