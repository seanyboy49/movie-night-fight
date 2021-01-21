from flask import Blueprint
from flask_cors import CORS

misc_bp = Blueprint('misc', __name__)

# Enable CORS on misc api routes
CORS(misc_bp)

from server.misc import routes