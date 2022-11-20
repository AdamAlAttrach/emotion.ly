import React, {useState} from 'react'
import Genres from './genres/Genres';
import InputText from './InputText/InputText';
import GenresList from './genres/genre_list';
import {useNavigate} from 'react-router-dom'

export const Layout = () => {
  
  const navigate = useNavigate()
  const [text, setText] = useState("");
  const [genres, setGenres] = useState(GenresList())

  const handleSubmit = (e) => {
    e.preventDefault()
    const selected = genres.filter(obj => {return obj.isSelected}).map(obj => {
        return obj.title;
    })
    const selectedGenres = selected.toString();
    
    navigate('/playlist', {
      state: {
        text: text,
        genres: selectedGenres
      }
    });
  };
  

  const updateGenres = (genre, genreList) => {
    setGenres(genreList.map(obj => {
        if (obj.title === genre.title) {
          return {...obj, isSelected: !obj.isSelected};
        }
  
        return obj;
      })
    );
  };

  

  return (
    <div className='bg-[#f8ecde]'>
      <InputText setText = {setText}/>
      <button type = "submit" onClick={handleSubmit} class="bg-indigo-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        I feel you
      </button>
      <Genres genres = {genres} updateGenres = {updateGenres}/>
    
  
    </div>

  )
}
export default Layout