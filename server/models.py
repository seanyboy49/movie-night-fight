from .extensions import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    watchlist = db.relationship('UserMovies',
                                backref='watcher',
                                cascade="all, delete-orphan")
    houses = db.relationship('UserHouses',
                             backref='housemate')

    def __repr__(self):
        return '<user> {}'.format(self.username)

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active


class Movie(db.Model):
    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), index=True, unique=True)
    omdb_id = db.Column(db.String)
    poster_url = db.Column(db.String(256))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def serialize(self):
        return {
            'name': self.name,
            'omdb_id': self.omdb_id,
            'poster_url': self.poster_url
        }


class UserMovies(db.Model):
    __tablename__ = "user_movies"

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey("movies.id"), primary_key=True)
    watched_at = db.Column(db.DateTime)
    movie = db.relationship(Movie, lazy="joined", )

    def __init__(self, movie):
        self.movie = movie


class House(db.Model):
    __tablename__ = "houses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), index=True, unique=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    users = db.relationship('UserHouses',
                            backref='house')

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'users': list(map(lambda u: u.username, self.users))
        }


class UserHouses(db.Model):
    __tablename__ = 'user_houses'

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    house_id = db.Column(db.Integer, db.ForeignKey("houses.id"), primary_key=True)
    user_role = db.Column(db.String(30), default="house_mate")
    user = db.relationship(User, lazy="joined")

    def __init__(self, house):
        self.house = house
