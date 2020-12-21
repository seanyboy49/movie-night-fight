from .extensions import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    watchlist = db.relationship('Watchlist',
                                foreign_keys='Watchlist.user_id',
                                backref='watcher', lazy='dynamic')

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


user_movies = db.Table('user_movies',
                       db.Column('user_id', db.Integer,
                                 db.ForeignKey('users.id')),
                       db.Column('movie_id', db.Integer,
                                 db.ForeignKey('movies.id')))


class Movie(db.Model):
    __tablename__ = "movies"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), index=True, unique=True)
    omdb_id = db.Column(db.String)
    poster_url = db.Column(db.String(256))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
