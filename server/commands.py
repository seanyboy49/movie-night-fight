import click
from flask.cli import with_appcontext

from .extensions import db
from .models import Post


@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()

@click.command(name="print_hello")
def print_hello():
    print('hello world')