from flask import Flask
import os

from .routes.main import main
from .routes.api import api


def create_app():
    app = Flask(
                __name__,
                static_folder=os.path.abspath('client/build'),
                static_url_path='/'
                )
    # register routes
    app.register_blueprint(main)
    app.register_blueprint(api)

    return app
