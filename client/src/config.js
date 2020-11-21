const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:8000/api'
    : 'https://movienightfight.herokuapp.com/api'

const config = {
  apiUrl,
}

export default config
