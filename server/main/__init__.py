from flask import Blueprint
import os

main_bp = Blueprint(
    'main', __name__,
    static_folder=os.path.abspath("client/build"),
    static_url_path='/')

from server.main import routes
