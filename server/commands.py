import click
from flask.cli import with_appcontext

from .extensions import db, guard
from .models import Post, FlatMate


@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()


@click.command(name='create_first_flatmate')
@with_appcontext
def create_first_flatmate():
    if db.session.query(FlatMate).filter_by(username='Sean').count() < 1:
        db.session.add(FlatMate(
            username='Sean',
            password=guard.hash_password('strongpassword'),
            roles='admin'
        ))
    db.session.commit()
