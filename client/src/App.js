import React, {useEffect, useState} from 'react'
import _axios from 'axios';


const axios = _axios.create({ baseURL: 'http://localhost:5000'});

function App() {

  const [songs, setSongs] = useState([])
  
  useEffect( () => {
    getSongs();
  }, []);

  const getSongs = () => {
    axios.get('/songs').then((response) => {
      console.log(response.data)
      const allSongs = response.data;
      setSongs(allSongs.hello)
    })
    .catch(() => console.log("error"))
  }

  return (
    <div>
      {songs.map( (song) => <h1>{song}</h1> )}
    </div>
  )
}

export default App