import os.path
from flask import Flask, request, render_template, jsonify


STATIC_BASEURL = os.getenv('STATIC_BASEURL', '/static')

app = Flask(__name__)


@app.route('/api')
def api():
    if not request.authorization.username:
        return 'missing API key', 401

    return jsonify(foo={'bar': True})


@app.route('/')
def index():
    gx_auth_code = request.args.get('code')
    api_key = os.urandom(10).hex() if gx_auth_code else None
    return render_template(
        'index.jinja2',
        assets_baseurl=STATIC_BASEURL,
        api_key=api_key,
    )
