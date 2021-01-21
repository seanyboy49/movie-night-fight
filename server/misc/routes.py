from flask import jsonify

from server.misc import misc_bp

@misc_bp.route('/api/ping')
def ping_cron():
    return jsonify('hello world')