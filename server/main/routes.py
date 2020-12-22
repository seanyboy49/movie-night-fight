from server.main import main_bp


@main_bp.route('/')
def index():
    return main_bp.send_static_file('index.html')


@main_bp.errorhandler(404)
def not_found(e):
    return main_bp.send_static_file('index.html')
