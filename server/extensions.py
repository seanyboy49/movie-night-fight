
from flask_sqlalchemy import SQLAlchemy
import flask_praetorian
from flask_migrate import Migrate

db = SQLAlchemy()
guard = flask_praetorian.Praetorian()
migrate = Migrate()
