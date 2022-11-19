import text2emotion as te
import requests
from urllib.parse import urlencode
import pprint


CLIENT_ID = "0ac9bed4afae4f54a89cf95f43c0542f"
CLIENT_SECRET = "2bb61656c350462bb4a3bfb16acf3026"
OAUTH_TOKEN = "BQDTlMy3wG7KH2ndg5-Jab8frl5Dakj-HIp7s8F6IXDxoub_idsrI7p4MThtm3_hbOr2_nVsG42rOwoF0MOk5qgIXA4BUHBUowc5-x-EmYMjyuQ0GnOOqz-QELftoXfEEAWzVtR8F-Alv8aXZgLyhkTBTRHGVU4svPmQ2g9Qfvdjy9WE"

emotion_to_energy_valence = {"Angry": [-0.4, 0.79], "Fear": [-0.12, 0.79],
                             "Happy": [0.89, 0.17], "Sad": [-0.81, -0.4], "Surprise": [0.7, 0.71]}


def get_emotion_keywords(text):
    return (te.get_emotion(text))


def get_valence_energy(emotions):

    final_point = [0, 0]
    print(emotions)
    for emotion in emotions:
        scale = emotions[emotion]
        point = [x * scale for x in emotion_to_energy_valence[emotion]]
        final_point[0] += point[0]
        final_point[1] += point[1]

    print(final_point)
    return final_point


def get_songs(valence, energy, limit, genres):
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {OAUTH_TOKEN} ',
    }

    params = {
        'limit': limit,
        'market': 'US',
        'seed_genres': genres,
        'min_energy': energy,
        'min_valence': valence,
    }

    response = requests.get(
        'https://api.spotify.com/v1/recommendations', params=params, headers=headers)

    return response.json()
