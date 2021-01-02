from server import create_app
from server.extensions import db
from server.models import User, Movie, UserMovies, House, UserHouses

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {
            'db': db,
            'UserMovies': UserMovies,
            'User': User,
            'Movie': Movie,
            'House': House,
            'UserHouses': UserHouses
    }
