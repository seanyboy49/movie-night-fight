from .extensions import db, guard
from .models import User, Movie, UserMovies, House


def create_users():
    """create first users"""

    users_seeds = ['sean', 'jina']

    for u in users_seeds:
        if User.query.filter_by(username=u).count() < 1:
            new_user = User(username=u,
                            password=guard.hash_password('password'),
                            roles='admin')
            db.session.add(new_user)

    db.session.commit()


def create_movies():
    """create movies"""

    movie_seeds = [
        {
            'name': "Guardians of the Galaxy",
            'omdb_id': "tt3896198",
            'poster_url': "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
            'name': "Batman Begins",
            'omdb_id': "tt3896198",
            'poster_url': "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            'name': "Star Wars: Episode V - The Empire Strikes Back",
            'omdb_id': "tt0080684",
            'poster_url': "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            'name': "Aladdin",
            'omdb_id': "tt6139732",
            'poster_url': "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg"
        },
        {
            'name': "Love Actually",
            'omdb_id': "tt0314331",
            'poster_url': "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
        }
    ]

    for m in movie_seeds:
        if Movie.query.filter_by(omdb_id=m['omdb_id']).count() < 1:
            new_movie = Movie(name=m['name'],
                              omdb_id=m['omdb_id'],
                              poster_url=m['poster_url'])
            db.session.add(new_movie)

    db.session.commit()


def create_watchlist():
    """create watchlist"""

    sean = User.query.filter_by(username='sean').first()
    movies = Movie.query.all()

    for m in movies:
        if len(list(filter(lambda x: x.movie.name == m.name, sean.watchlist))) < 1:
            sean.watchlist.append(UserMovies(m))

    db.session.commit()


def create_houses():
    house_seeds = ["Boats n' Hoes", "House of Mirrors"]

    for h in house_seeds:
        if House.query.filter_by(name=h).count() < 1:
            new_house = House(name=h)
            db.session.add(new_house)

    db.session.commit()


def create_user_houses():

    sean = User.query.filter_by(username='sean').first()
    houses = House.query.all()

    for h in houses:
        if len(list(filter(lambda x: x.name == h.name, sean.houses))) < 1:
            sean.houses.append(h)

    db.session.commit()
