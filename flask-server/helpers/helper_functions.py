import text2emotion as te
import requests
import json

CLIENT_ID = "0ac9bed4afae4f54a89cf95f43c0542f"
CLIENT_SECRET = "2bb61656c350462bb4a3bfb16acf3026"
OAUTH_TOKEN = "BQDOzo3LJnvkGvuYNsv_dzkhh-5ObaIL5MJMElXAKcDfz78xeEmKBgLrVoO36wNLG6KTtxUC2GiF35rfzLCWlgYEJ37mTv8fDzgwa0uMCXzkBUCX7ibZvcOylVJC8vjMYr595y_h7fB5oJ9fU2HeBC944c-aEw_ns7h6hEmoFEhkhX4W"
emotion_to_energy_valence = {"Angry": [-0.4, 0.79], "Fear": [-0.12, 0.79],
                             "Happy": [0.89, 0.17], "Sad": [-0.81, -0.4], "Surprise": [0.7, 0.71]}


def get_emotion_keywords(text):
    return (te.get_emotion(text))


def get_valence_energy(emotions):

    final_point = [0, 0]
    for emotion in emotions:
        scale = emotions[emotion]
        point = [x * scale for x in emotion_to_energy_valence[emotion]]
        final_point[0] += point[0]
        final_point[1] += point[1]

    return final_point


def get_songs(valence, energy, limit, genres):

    final_json = {'tracks': []}

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {OAUTH_TOKEN} ',
    }

    params = {
        'limit': limit,
        'market': 'US',
        'seed_genres': genres.lower(),
        'target_energy': energy,
        'target_valence': valence,
    }

    response = requests.get(
        'https://api.spotify.com/v1/recommendations', params=params, headers=headers)

    data = json.loads(response.text)
    print(data)
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
        print(i)
    songs_json['tracks'][0]['active'] = True

    return songs_json
