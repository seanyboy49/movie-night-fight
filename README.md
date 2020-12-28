# Movie Night Fight

**Maintainer(s):** [@seanyboy49](https://github.com/seanyboy49), [@jinazhu](https://github.com/JinaZhu)

### Never fight about which movie to watch again!
Movie Night Fight is a mobile-first app for groups of movie lovers who can never figure out which movie to watch when it's their turn to choose. It keeps track of whose turn it is to choose the evening's entertainment, and allows each person to keep a curated list of movies to choose from when it's their turn.

### Architecture
There are two main components of this app. A [Flask app](https://flask.palletsprojects.com/en/1.1.x/) which serves as an API, and a[ React App](https://reactjs.org/) which serves as the client. 

The Flask app uses [pipenv](https://pipenv.pypa.io/en/latest/) to manage its virtual environment and python packages. So make sure that any Flask command you run (e.g, `flask run, flask shell`) are run in the context of a pipenv shell.
The React app is created from an [ejected create-react-app](https://create-react-app.dev/docs/available-scripts/#npm-run-eject), and is served statically from the Flask app.

### Auth
We use [flask praetorian](https://flask-praetorian.readthedocs.io/en/latest/) to manage authentication and authorization. It uses JWT's to make sure that users accessing the APIs protected endpoints are provisioned with the correct roles for access.

We can protect API routes using a simple decorator function from this library. For example:
```py
@api.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    .. example::
    $ curl http://loclahost:5000/api/protected -X GET \
        -H "Authorization: Bearer <your_token>"
    """

    return {"message": f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}

```
This is used in conjunction with [react token auth](https://www.npmjs.com/package/react-token-auth) to manage the auth token on the frontend. 

The auth setup for this app is heavily inspired by [this article](https://yasoob.me/posts/how-to-setup-and-deploy-jwt-auth-using-react-and-flask/).

### Local Development
**Create your local database**
```
createdb movie_night_fight
```

**Run migrations**
We use [flask migrate](https://flask-migrate.readthedocs.io/en/latest/) to handle database migrations. It generates migration files based on detected changes to your models that you can then run to upgrade or downgrade your database.
When you run the app locally for the first time, make sure to run migrations in order to create the necessary tables in your local database
```
// activate your pipenv environment
pipenv shell

// run migrations
flask db migrate
```

**Populate the database**
This app exposes custom CLI commands through [click](https://flask.palletsprojects.com/en/1.1.x/cli/). You can populate the database with a seeds file using one of these commands.
```
pipenv run flask run_seeds
```

**Run the server**
Make sure you have a `.env` file with the required values, as the flask app will use it to load environment variables.

```
// activate your pipenv environment
pipenv shell 

// start the flask server
flask run
```

**Run the frontend**
The client is in a subfolder so make sure to cd into the right directory.
```
cd client

npm run start
```

### Updating Frontend Code
[Flask will serve the React](server/routes/main.py) app by looking for static assets in the `/client/build` folder.

Previously we had to remember to run `npm run build` before pushing changes to Github. [This commit] (https://github.com/seanyboy49/movie-night-fight/pull/29) adds a `package.json` to the root of the project with a `heroku-postbuild` script that will build the react app and generate the `build` folder in the client in Heroku's file system.


### API
**Movies**

`GET /watchlist` - Fetch a user's watchlist

- There is no need to send a `user_id`, since the server keeps track of the currently logged in user making the request.
- Returns a list of movies filtered where `movie.watched_at` is not `Null`

**Houses**

`GET /joined-houses` - Get all houses that a user has joined

- Returns a list of houses