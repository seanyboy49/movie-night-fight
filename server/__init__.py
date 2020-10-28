from flask import Flask
from flask_cors import CORS
import os


from .routes.main import main
from .routes.api import api

def create_app():
    app = Flask(__name__, static_folder=os.path.abspath('client/build'), static_url_path='/')
    CORS(app)
    
    # register routes
    app.register_blueprint(main)
    app.register_blueprint(api)

    return app