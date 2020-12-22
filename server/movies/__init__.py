from flask import Blueprint
from flask_cors import CORS

movies_bp = Blueprint('movies', __name__)

# Enable CORS on movies api routes
CORS(movies_bp)

from server.movies import routes