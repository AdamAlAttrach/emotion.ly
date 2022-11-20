import React from 'react';
import './genres.css';
import pop_img from "./images/pop.jpg"
import rock_img from "./images/rock.jpg"
import jazz_img from "./images/jazz.jpg"
import metal_img from "./images/metal.jpg"
import classical_img from "./images/classical.jpg"
import hiphop_img from "./images/hiphop.jpg"
import electronic_img from "./images/electronic.jpg"
import country_img from "./images/country.jpg"
import dubstep_img from "./images/dubstep.jpg"
import latin_img from "./images/latin.jpg"
import soul_img from "./images/soul.jpg"
import blues_img from "./images/blues.jpg"
import rnb_img from "./images/rnb.jpg"
import reggae_img from "./images/reggae.jpg"

const Genres = ({genres, setGenres}) => {
      const handleChange = (e) => {
        setGenres({
          ...genres,
    
          // Trimming any whitespace
          [e.target.value]: e.target.value.trim()
        });
      };
    return (
        <nav className="genres-menu">
            <div className="genre Pop" >
                <button name="genres" onClick={handleChange}>Pop</button>
                <img className="genre-img" src={pop_img} alt="Pop icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Pop</span>
                    </div>
                </div>
            </div>
            <div className="genre Rock">
                <button name="genres" onClick={handleChange}>Rock</button>
                <img className="genre-img" src={rock_img} alt="Rock icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Rock</span>
                    </div>
                </div>
            </div>
            <div className="genre Jazz">
                <button name="genres" onClick={handleChange}>Jazz</button>
                <img className="genre-img" src={jazz_img} alt="Jazz icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Jazz</span>
                    </div>
                </div>
            </div>
            <div className="genre Metal">
                <button name="genres" onClick={handleChange}>Metal</button>
                <img className="genre-img" src={metal_img} alt="Metal icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Metal</span>
                    </div>
                </div>
            </div>
            <div className="genre Classical">
                <button name="genres" onClick={handleChange}>Classical</button>
                <img className="genre-img" src={classical_img} alt="Classical icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Classical</span>
                    </div>
                </div>
            </div>
            <div className="genre Hip-Hop">
                <button name="genres" onClick={handleChange}>Hip-Hop</button>
                <img className="genre-img" src={hiphop_img} alt="Hip-Hop icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Hip-Hop</span>
                    </div>
                </div>
            </div>
            <div className="genre Electronic">
                <button name="genres" onClick={handleChange}>Electronic</button>
                <img className="genre-img" src={electronic_img} alt="Electronic icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Electronic</span>
                    </div>
                </div>
            </div>
            <div className="genre Country">
                <button name="genres" onClick={handleChange}>Country</button>
                <img className="genre-img" src={country_img} alt="Country icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Country</span>
                    </div>
                </div>
            </div>
            <div className="genre Dubstep">
                <button name="genres" onClick={handleChange}>Dubstep</button>
                <img className="genre-img" src={dubstep_img} alt="Dubstep icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Dubstep</span>
                    </div>
                </div>  
            </div>
            <div className="genre Latin">
                <button name="genres" onClick={handleChange}>Latin</button>
                <img className="genre-img" src={latin_img} alt="Latin icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Latin</span>
                    </div>
                </div>
            </div>
            <div className="genre Soul">
                <button name="genres" onClick={handleChange}>Soul</button>
                <img className="genre-img" src={soul_img} alt="Soul icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Soul</span>
                    </div>
                </div>
            </div>
            <div className="genre Blues">
                <button name="genres" onClick={handleChange}> Blues</button>
                <img className="genre-img" src={blues_img} alt="Blues icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Blues</span>
                    </div>
                </div>
            </div>
            <div className="genre R-n-B">
                <button name="genres" onClick={handleChange}>RnB</button>
                <img className="genre-img" src={rnb_img} alt="R&B icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>RnB</span>
                    </div>
                </div>
            </div>
            <div className="genre Reggae">
                <a name="genres" onClick={handleChange}>Reggae</a>
                <img className="genre-img" src="./images/reggae.jpg" alt="Reggae icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Reggae</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Genres