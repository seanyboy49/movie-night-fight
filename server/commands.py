import click
from flask.cli import with_appcontext

from .extensions import db
from .seed import create_users, create_movies


@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()


@click.command(name='create_users_movies')
@with_appcontext
def create_users_movies():
    create_users()
    create_movies()
