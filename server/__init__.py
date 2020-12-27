from flask import Flask
import os


from server.auth import auth_bp
from server.main import main_bp
from server.movies import movies_bp

from .commands import create_tables, run_seeds
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
    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(movies_bp)

    # add cli commands
    app.cli.add_command(create_tables)
    app.cli.add_command(run_seeds)

    return app
