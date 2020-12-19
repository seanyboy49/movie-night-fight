from flask import Flask
import os


from .commands import create_tables, create_first_user
from .routes.main import main
from .routes.api import api
from .extensions import db, guard, migrate
from .models import User


def create_app(config_file='settings.py'):
    app = Flask(
                __name__,
                static_folder=os.path.abspath('client/build'),                
                template_folder=os.path.abspath('client')
                )

    # set up configuration from config file
    app.config.from_pyfile(config_file)

    # init praetorian
    guard.init_app(app, User)

    # init the db
    db.init_app(app)
    migrate.init_app(app, db)

    # register routes
    app.register_blueprint(main)
    app.register_blueprint(api)

    # add cli commands
    app.cli.add_command(create_tables)
    app.cli.add_command(create_first_user)

    return app
