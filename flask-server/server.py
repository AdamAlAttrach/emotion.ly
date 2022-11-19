from flask import Flask


app = Flask(__name__)


# Text analysis route
@app.route("/text-to-playlist")
def text_to_playlist():
    return {"hello": ["world", "world", "world"]}


if __name__ == "__main__":
    app.run(debug=True)
