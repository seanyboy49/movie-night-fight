import os
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(".") / '.env'
load_dotenv(dotenv_path=env_path)

SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = os.environ.get('SECRET_KEY')
OMDB_API_KEY = os.environ.get('OMDB_API_KEY')
JWT_ACCESS_LIFESPAN = {'days': 1}
JWT_REFRESH_LIFESPAN = {'days': 2}
