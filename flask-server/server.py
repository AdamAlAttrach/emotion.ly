from flask import Flask, request
from flask_cors import CORS
from helpers import helper_functions



app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "<p>Hello, World!</p>"

# Text analysis route
@app.route("/songs")
def getSongs():
    text = request.args.get("text")
    


if __name__ == "__main__":
    app.run(debug=True)
