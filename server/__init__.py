from flask import Flask
import os


from .commands import create_tables, print_hello
from .routes.main import main
from .routes.api import api
from .extensions import db


def create_app(config_file='settings.py'):
    app = Flask(
                __name__,
                static_folder=os.path.abspath('client/build'),
                static_url_path='/'
                )

    # set up configuration from config file
    app.config.from_pyfile(config_file)

    # init the db
    db.init_app(app)

    # register routes
    app.register_blueprint(main)
    app.register_blueprint(api)

    # add cli commands
    app.cli.add_command(create_tables)
    app.cli.add_command(print_hello)

    return app
