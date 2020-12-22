from flask import Blueprint
import os

main = Blueprint(
    'main', __name__,
    static_folder=os.path.abspath("client/build"),
    static_url_path='/'
    )


@main.route('/')
def index():
    return main.send_static_file('index.html')


@main.errorhandler(404)
def not_found(e):
    return main.send_static_file('index.html')
