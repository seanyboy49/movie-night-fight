# Movie Night Fight

**Maintainer(s):** [@seanyboy49](https://github.com/seanyboy49), [@jinazhu](https://github.com/JinaZhu)

## Never fight about which movie to watch again!
Movie Night Fight is a mobile-first app for groups of movie lovers who can never figure out which movie to watch when it's their turn to choose. It keeps track of whose turn it is to choose the evening's entertainment, and allows each person to keep a curated list of movies to choose from when it's their turn.

## Architecture
There are two main components of this app. A [Flask app](https://flask.palletsprojects.com/en/1.1.x/) which serves as an API, and a[ React App](https://reactjs.org/) which serves as the client. 

The Flask app uses [pipenv](https://pipenv.pypa.io/en/latest/) to manage its virtual environment and python packages. So make sure that any Flask command you run (e.g, `flask run, flask shell`) are run in the context of a pipenv shell.
The React app is created from an [ejected create-react-app](https://create-react-app.dev/docs/available-scripts/#npm-run-eject), and is served statically from the Flask app.

## Auth
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

## Local Development
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

## Updating Frontend Code
[Flask will serve the React](server/routes/main.py) app by looking for static assets in the `/client/build` folder.

Previously we had to remember to run `npm run build` before pushing changes to Github. [This commit](https://github.com/seanyboy49/movie-night-fight/pull/29) adds a `package.json` to the root of the project with a `heroku-postbuild` script that will build the react app and generate the `build` folder in the client in Heroku's file system.


## API
### Movies

#### GET /watchlist 
Fetch a user's watchlist

There is no need to send a `user_id`, since the server keeps track of the currently logged in user making the request.

Returns a list of movies filtered where `movie.watched_at` is not `Null`


[200 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

```json
[
  { 
    "id": 1,
    "name": "Star Wars: Episode V - The Empire Strikes Back",
    "omdb_id": "tt0080684",
    "poster_url": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id": 3,
    "name": "Aladdin",
    "omdb_id": "tt6139732",
    "poster_url": "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg"
  },
  {
    "id": 4,
    "name": "Love Actually",
    "omdb_id": "tt0314331",
    "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
  }
]
```

#### POST /watchlist 
Add to a user's watchlist. Expects `content-type: application/json`.

**Example Request Body**
```json
    {
      "poster_url": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "name": "The Social Network",
      "omdb_id": "tt1285016"
    }
```

[201 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
```json
{
  "message": "Movie added to watchlist"
}
```

If the user's watchlist already contains the movie, the endpoint will return 200.

[200 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
```json
{
  "message": "Movie already added to watchlist"
}
```

#### DELETE /watchlist/<movie_id>

Remove a movie from a user's watchlist.
[Deleting a resource is idempotent](https://stackoverflow.com/questions/6439416/deleting-a-resource-using-http-delete), which means that subsequent requests to this endpoint with the same arguments should not change behavior. Deleting the resource the first time will yield [204 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204), as will subsequent requests.

Failure to supply a `movie_id` in the url will result in [405 Method Not Allowed Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405).

#### PATCH /watchlist/<movie_id>
Marks a movie in a watchlist as watched by updating the `watched_at` field with the current time.

Returns [204 No Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)

#### GET /movies?search=<search_string> 
Search for movies by name

This endpoint makes a request to [OMDB's free movie database api](http://www.omdbapi.com/) with the query string sent by the client.
Clients should be prepared to handle movies that do **not** have a Poster url.

**Query Parameters**
- search (required)
A string sent by the client that specifies a movie title to search for.

**Example request**
```js
curl http://0.0.0.0:8000/api/movies?search=batman
```

The server will return the OMDB api response with no modification. Therefore, clients should check if the server response `Response` property is `"True"`.

Successful [200 response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

```json
{
  "Response": "True",
  "Search": [
    {
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      "Title": "Batman Returns",
      "Type": "movie",
      "Year": "1992",
      "imdbID": "tt0103776"
    },
    {
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Title": "Batman Forever",
      "Type": "movie",
      "Year": "1995",
      "imdbID": "tt0112462"
    },
    {
      "Poster": "N/A",
      "Title": "Batman & Robin",
      "Type": "movie",
      "Year": "1997",
      "imdbID": "tt0118688"
    },
  ],
  "totalResults": "399"
}
```



Movie not found response
```json
{
  "Error": "Movie not found!",
  "Response": "False"
}

```

### Houses

#### GET /joined-houses 
Get all houses that a user has joined

Returns a list of houses and its users.

[200 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

```json
[
  {
    "id": 1,
    "name": "Winterfell",
    "users": [
        {
            "role": "admin",
            "user": "sean"
        },
        {
            "role": "house_mate",
            "user": "jina"
        }
    ]
  },
  {
    "id": 2,
    "name": "House of Mirrors",
    "users": [
        {
            "role": "admin",
            "user": "sean"
        },
    ]
  }
]
```

#### GET /houses?search=<search_string>
Search for a house by name.

**Query Parameters**
- search (required)
A string sent by the client that specifies a house name to search for.

**Example request**
```js
curl http://0.0.0.0:8000/api/houses?search=mirrors
```

Successful [200 response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

```json
[
  {
    "id": 2,
    "name": "House of Mirrors",
    "users": [
        {
            "role": "admin",
            "user": "sean"
        },
    ]
  }
]
```

#### POST /houses
Create a house.

A user who creates a house will automatically join the house as `admin`.

**Example request body**
```json
{
  "name": "Rich Mohagany"
}
```

Returns the newly created house.

[201 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)

```json
{
    "id": 11,
    "name": "The Batcave",
    "users": [
        {
            "role": "admin",
            "user": "sean"
        }
    ]
}

```

#### POST /houses/<house_id>/memberships
Join a house.

A user who joins a house will automatically join the house as a `house_mate` role.

The route will add the current_user to the house's `users` list.

**Example request**
```js
curl -X POST http://0.0.0.0:8000/api/houses/7/memberships -X 
```

Returns the house with the new user.
[201 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)

```json
{
    "id": 11,
    "name": "The Batcave",
    "users": [
        {
            "role": "admin",
            "user": "sean"
        },
        {
            "role": "house_mate",
            "user": "seb"
        }
    ]
}
```

#### DELETE /houses/<house_id>/memberships
Leave a house.

**Example request**
```js
curl -X DELETE http://0.0.0.0:8000/api/houses/7/memberships
```

There are three possible outcomes to this. All are [200 Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)

1. The user is the last person left in the house. Therefore, house gets deleted when the last user leaves.


```json
{
    "message": "Successfully left and deleted House of Mirrors"
}
```

2. The user has an `admin` role. The user leaves, and we automatically assign admin role to another person in the house.

```json
{
    "message": "Successfully left House of Mirrors. Jina is now admin."
}
```

3. The user is just a `house_mate`. The user leaves the house.


```json
{
    "message": "Successfully left House of Mirrors."
}
```

