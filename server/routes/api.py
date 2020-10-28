from flask import Blueprint 

api = Blueprint('api', __name__)

@main.route('/api/hello')
def hello():
    return jsonify('hello world')