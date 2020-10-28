from flask import Blueprint
import os

main = Blueprint('main', __name__, static_folder=os.path.abspath("client/build"))

@main.route('/')
def index():
    return main.send_static_file('index.html')