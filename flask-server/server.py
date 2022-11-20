from flask import Flask, request
from flask_cors import CORS
from helpers import helper_functions as hf


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "<p>Hello, World!</p>"

# Text analysis route


@app.route("/playlist")
def getSongs():
    
    genres = request.args.get("genres").lower()
    print("this is the genres" + genres)
    text = request.args.get("text")
    print("this is the text "+ text)
    emotion = hf.get_emotion_keywords(text)
    print(emotion)
    valence, energy = hf.get_valence_energy(emotion)
    songs = hf.get_songs(valence, energy, 10, genres)
    print(songs)
    return hf.add_mp3_url(songs)


if __name__ == "__main__":
    app.run(debug=True, port=8000)
