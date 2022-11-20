import text2emotion as te
import requests
import json

CLIENT_ID = "0ac9bed4afae4f54a89cf95f43c0542f"
CLIENT_SECRET = "2bb61656c350462bb4a3bfb16acf3026"
OAUTH_TOKEN = "BQBIby2ZSIWIw_Gn2rOoWnEptnFzmH-nANOr47GgtL-dAYbLse8B5xY5ttnHG3iGdFtNF9LGYTKytd0mgVbZSFCO97YnGMr6BXtU1De2hXgQN2GnoOkfTygF3vnpKh29Dm4tjM1MhRFoJ6nu5LrdDePNaUqmaijxG3H6fpLPffhu9d2z"

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


def get_songs(valence, energy, limit, genres_arr):

    genres = ','.join(genres_arr)

    final_json = {'tracks': []}

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {OAUTH_TOKEN} ',
    }

    params = {
        'limit': limit,
        'market': 'US',
        'seed_genres': genres,
        'target_energy': energy,
        'target_valence': valence,
    }

    response = requests.get(
        'https://api.spotify.com/v1/recommendations', params=params, headers=headers)

    data = json.loads(response.text)
    for track in data['tracks']:
        artist = track['artists'][0]['name']
        song_name = track['name']
        image_src = track['album']['images'][0]['url']
        final_json['tracks'].append({
            'artist': artist,
            'name': song_name,
            'cover': image_src,
        })

    return final_json


def add_mp3_url(songs_json):

    for i in songs_json['tracks']:
        print(i)
        q_str = f"{i['name']} by {i['artist']}"
        url = "https://youtube-music1.p.rapidapi.com/v2/search"

        querystring = {"query": q_str}

        headers = {
            "X-RapidAPI-Key": "27ea075167msh27f49714cc55f08p17b9f1jsn8b86e950000a",
            "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com"
        }

        response = requests.request(
            "GET", url, headers=headers, params=querystring)

        data = json.loads(response.text)
        song_id = data['result']['songs'][0]['id']
        i['id'] = song_id

        url = "https://youtube-music1.p.rapidapi.com/get_download_url"

        querystring_mp3 = {"id": song_id, "ext": "mp3"}

        headers_mp3 = {
            "X-RapidAPI-Key": "27ea075167msh27f49714cc55f08p17b9f1jsn8b86e950000a",
            "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com"
        }

        response2 = requests.request(
            "GET", url, headers=headers_mp3, params=querystring_mp3)

        data2 = json.loads(response2.text)
        mp3_url = data2['result']['download_url']
        i['audio'] = mp3_url
        i['active'] = False
        i['color'] = ["#CD607D", "#c94043"]

    songs_json['tracks'][0]['active'] = True

    return songs_json
