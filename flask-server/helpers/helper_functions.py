import text2emotion as te

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
