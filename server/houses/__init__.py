from flask import Blueprint
from flask_cors import CORS

houses_bp = Blueprint('houses', __name__)

# Enable CORS on houses api routes
CORS(houses_bp)

from server.houses import routes