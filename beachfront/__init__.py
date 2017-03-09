import os.path
from flask import Flask, render_template, jsonify


STATIC_BASEURL = os.getenv('STATIC_BASEURL', '/static')

app = Flask(__name__)


@app.route('/api')
def api():
    return jsonify(foo={'bar': True})


@app.route('/')
def index():
    return render_template(
        'index.jinja2',
        assets_baseurl=STATIC_BASEURL,
    )
