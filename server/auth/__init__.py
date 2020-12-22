from flask import Blueprint
from flask_cors import CORS

auth_bp = Blueprint('auth', __name__)

# Enable CORS on auth api routes
CORS(auth_bp)

from server.auth import routes
