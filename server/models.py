from .extensions import db


class User(db.Model):
    __tablename__ = "users"
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
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
    
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username
        }

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
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(140), index=True)
    omdb_id = db.Column(db.String)
    poster_url = db.Column(db.String(256))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'omdb_id': self.omdb_id,
            'poster_url': self.poster_url
        }


class UserMovies(db.Model):
    __tablename__ = "user_movies"
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey("movies.id"), primary_key=True)
    watched_at = db.Column(db.DateTime)
    movie = db.relationship(Movie, lazy="joined", )

    def __init__(self, movie):
        self.movie = movie


class House(db.Model):
    __tablename__ = "houses"
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(140), index=True, unique=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    users = db.relationship('UserHouses',
                            backref='house',
                            lazy="joined",
                            order_by="asc(UserHouses.created_at)",
                            cascade="all, delete-orphan")
    turns = db.relationship('HouseTurns',
                            order_by="asc(HouseTurns.created_at)",
                            lazy="joined")

    def get_current_and_next_turns(self):
        last_house_turn = self.turns and self.turns[-1] or None

        # No turns yet, so set current and next turns from users
        if last_house_turn is None or len(self.users) == 1:
            # If there's only one person in the house, then there is no next person to choose
            next_turn = self.users[1].user.serialize() if 1 < len(self.users) else None

            return {
                'current_turn': self.users[0].user.serialize(),
                'next_turn': next_turn,
                'history': [turn.serialize() for turn in self.turns]
            }

        else:
            users_last_turn_index = next(index for index, user in enumerate(self.users) if user.user_id == last_house_turn.user_id)
            users_length = len(self.users)
            current_turn_index = (users_last_turn_index + 1) % users_length
            next_turn_index = (current_turn_index + 1) % users_length

            return {
                'current_turn': self.users[current_turn_index].user.serialize(),
                'next_turn': self.users[next_turn_index].user.serialize(),
                'history': [turn.serialize() for turn in self.turns]
            }

    def serialize(self):
        users = list(map(lambda u: self.getUser(u), self.users))

        return {
            'id': self.id,
            'name': self.name,
            'users': users
        }

    @staticmethod
    def getUser(user_house):
        return {
            'user': user_house.user.username,
            'role': user_house.user_role
        }


class UserHouses(db.Model):
    __tablename__ = 'user_houses'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    house_id = db.Column(db.Integer, db.ForeignKey("houses.id"), primary_key=True)
    user_role = db.Column(db.String(30), default="house_mate")
    user = db.relationship(User, lazy="joined")
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def set_role(self, user_role):
        self.user_role = user_role


class HouseTurns(db.Model):
    __tablename__ = 'house_turns'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    house_id = db.Column(db.Integer, db.ForeignKey("houses.id"), primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey("movies.id"), primary_key=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    user = db.relationship(User, lazy="joined")
    house = db.relationship(House, lazy="joined")
    movie = db.relationship(Movie, lazy="joined")

    def serialize(self):
        return {
            'user': self.user.username,
            'movie': self.movie.name,
            'created_at': self.created_at
        }
