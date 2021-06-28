from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/profile")
def profile():
    return dict(
        name='John Doe',
        email='john@example.com',
        country='Temeria',
    )


@app.route("/api/users")
def user_list():
    users = [
        dict(name='Calanthe of Cintra', id='calanthe'),
        dict(name='Geralt of Rivia', id='geralt'),
        dict(name='Yennefer of Vengerberg', id='yennefer'),
    ]

    return jsonify(users)


@app.route("/api/countries")
def country_list():
    countries = [
        dict(name='Cintra', id='cintra'),
        dict(name='Rivia', id='rivia'),
        dict(name='Aedirn', id='aedirn'),
    ]

    return jsonify(countries)
