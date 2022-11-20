import React from 'react';
import './genres.css';

import Genre from './Genre';


const Genres = ({genres, updateGenres}) => {
      
    return (
        <nav className="genres-menu">
           {genres.map((genre) => (
                <Genre genre = {genre} genres = {genres} updateGenres = {updateGenres}/>        
           ))
           }
        </nav>
    )
}

export default Genres