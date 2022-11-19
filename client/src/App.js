import React, {useEffect, useState} from 'react'
import _axios from 'axios';

function App() {

  const [songs, setSongs] = useState('')
  
  useEffect( () => {
    getSongs();
  }, []);

  const getSongs = () => {
    axios.get('/songs').then((response) => {
      console.log(response.data)
      const allSongs = response.data;
      setDSongs(allSongs.hello)
    })
    .catch(() => console.log("error"))
  }

  return (
    <div>
      {songs}  
    </div>
  )
}

export default App