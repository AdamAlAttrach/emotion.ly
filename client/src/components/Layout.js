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
      <InputText setText = {setText} className=" py-20"/>
      <button type = "submit" onClick={handleSubmit} class="bg-[#840000] hover:text-black hover:bg-[#F8EBDD] text-white font-bold py-2 px-4 ml-[650px] border-2 border-[#840000] hover:border-[#840000] hover:text-[#840000] rounded w-[150px] relative">
        Talk to me
      </button>
      <Genres genres = {genres} updateGenres = {updateGenres}/>
    
  
    </div>

  )
}
export default Layout