from server import create_app
from server.extensions import db
from server.models import FlatMate, Post

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'FlatMate': FlatMate, 'Post': 'Post'}