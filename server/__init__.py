from flask import Flask 

from .routes.main import main

def create_app():
    app = Flask(__name__)
    
    # register routes 
    app.register_blueprint(main)

    return app