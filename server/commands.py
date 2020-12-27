import click
from flask.cli import with_appcontext

from .extensions import db
from .seed import create_users, create_movies, create_watchlist, create_user_houses


@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()


@click.command(name='run_seeds')
@with_appcontext
def run_seeds():
    create_users()
    create_movies()
    create_watchlist()
    create_user_houses()
