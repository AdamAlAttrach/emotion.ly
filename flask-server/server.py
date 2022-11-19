from flask import Flask


app = Flask(__name__)


@app.route('/')
def home():
    return "<p>Hello, World!</p>"
# Text analysis route
@app.route("/songs")
def text_to_playlist():
    return {"hello": ["world", "world", "world"]}


if __name__ == "__main__":
    app.run(debug=True)
