from flask import Flask
import os


from .commands import create_tables, create_first_user
from .routes.main import main
from .routes.api import api
from .extensions import db, guard
from .models import User


def create_app(config_file='settings.py'):
    app = Flask(
                __name__,
                static_folder=os.path.abspath('client/build'),
                static_url_path='/'
                )

    # set up configuration from config file
    app.config.from_pyfile(config_file)

    # init praetorian
    guard.init_app(app, User)

    # init the db
    db.init_app(app)

    # register routes
    app.register_blueprint(main)
    app.register_blueprint(api)

    # add cli commands
    app.cli.add_command(create_tables)
    app.cli.add_command(create_first_user)

    return app
