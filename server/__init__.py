from flask import Flask 
import os

from .routes.main import main

def create_app():
    app = Flask(__name__, static_folder=os.path.abspath('client/build'), static_url_path='/')
    
    # register routes
    app.register_blueprint(main)

    return app