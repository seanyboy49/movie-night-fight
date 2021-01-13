const routes = {
  public: {
    root: '/public',
    home: '/public/home',
    login: '/public/login',
    signup: '/public/signup',
  },
  app: {
    root: '/',
    moviesList: '/movies-list',
    houses: '/houses',
    houseDetail: '/houses/:houseName',
    searchMovies: '/search-movies',
  },
}

export default routes
