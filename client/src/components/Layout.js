import React, {useState} from 'react'
import Genres from './genres/Genres';
import InputText from './InputText/InputText';


export const Layout = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text,genres);
    // ... submit to API or something
  };
  const [text, setText] = useState("");
  const [genres, setGenres] = useState([])
  return (
    <div>
      <InputText setText = {setText}/>
      <button onClick={handleSubmit} class="bg-indigo-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        I feel you
      </button>
      <Genres genres = {genres} setGenres = {setGenres}/>
    
  
    </div>

  )
}
export default Layout