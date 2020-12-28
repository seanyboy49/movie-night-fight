def user_movie_to_dict(user_movie):
    return {
        'name': user_movie.movie.name,
        'omdb_id': user_movie.movie.omdb_id,
        'poster_url': user_movie.movie.poster_url
    }
