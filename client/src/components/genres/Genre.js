import React from 'react'
import rnb_img from "./images/rnb.jpg"

const Genre = ({genre, genres, updateGenres}) => {

  
  return (
    <div className="genre" >
                <button className = "genre-button" name="genres" onClick={() => {updateGenres(genre, genres)}}>{genre.title}</button>
                <img className="genre-img" src={require(`${genre.image}`)}></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>{genre.title}</span>
                    </div>
                </div>
    </div>
  )
}

export default Genre