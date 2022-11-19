import React, {useEffect, useState} from 'react'
import _axios from 'axios';


const axios = _axios.create({ baseURL: 'http://localhost:5000'});

function App() {
  
  const params = {"text": "I am got an internship finally, I'm so happy, so relieved wow finally!",
                  "genres": "hip-hop"
                }
  const [songs, setSongs] = useState([])
  
  useEffect( () => {
    getSongs();
  }, []);

  const getSongs = () => {
    axios.get('/songs', {params}).then((response) => {
      console.log(response.data)
      const allSongs = response.data;
      setSongs(allSongs.tracks)
    })
    .catch(() => console.log("error"))
  }

  return (
    <div>
      {songs.map( (song) => <h1>{song.name}</h1> )}
    </div>
  )
}

export default App