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

const Genres = () => {
    return (
        <nav className="genres-menu">
            <div className="genre Pop" >
                <button>Pop</button>
                <img className="genre-img" src={pop_img} alt="Pop icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Pop</span>
                        <span>Pop</span>
                        <span>Pop</span>
                        <span>Pop</span>
                    </div>
                </div>
            </div>
            <div className="genre Rock">
                <button>Rock</button>
                <img className="genre-img" src={rock_img} alt="Rock icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Rock</span>
                        <span>Rock</span>
                        <span>Rock</span>
                        <span>Rock</span>
                    </div>
                </div>
            </div>
            <div className="genre Jazz">
                <button>Jazz</button>
                <img className="genre-img" src={jazz_img} alt="Jazz icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Jazz</span>
                        <span>Jazz</span>
                        <span>Jazz</span>
                        <span>Jazz</span>
                    </div>
                </div>
            </div>
            <div className="genre Metal">
                <button>Metal</button>
                <img className="genre-img" src={metal_img} alt="Metal icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Metal</span>
                        <span>Metal</span>
                        <span>Metal</span>
                        <span>Metal</span>
                    </div>
                </div>
            </div>
            <div className="genre Classical">
                <button>Classical</button>
                <img className="genre-img" src={classical_img} alt="Classical icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Classical</span>
                        <span>Classical</span>
                        <span>Classical</span>
                        <span>Classical</span>
                    </div>
                </div>
            </div>
            <div className="genre Hip-Hop">
                <button>Hip-Hop</button>
                <img className="genre-img" src={hiphop_img} alt="Hip-Hop icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Hip-Hop</span>
                        <span>Hip-Hop</span>
                        <span>Hip-Hop</span>
                        <span>Hip-Hop</span>
                    </div>
                </div>
            </div>
            <div className="genre Electronic">
                <button>Electronic</button>
                <img className="genre-img" src={electronic_img} alt="Electronic icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Electronic</span>
                        <span>Electronic</span>
                        <span>Electronic</span>
                        <span>Electronic</span>
                    </div>
                </div>
            </div>
            <div className="genre Country">
                <button>Country</button>
                <img className="genre-img" src={country_img} alt="Country icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Country</span>
                        <span>Country</span>
                        <span>Country</span>
                        <span>Country</span>
                    </div>
                </div>
            </div>
            <div className="genre Dubstep">
                <button>Dubstep</button>
                <img className="genre-img" src={dubstep_img} alt="Dubstep icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Dubstep</span>
                        <span>Dubstep</span>
                        <span>Dubstep</span>
                        <span>Dubstep</span>
                    </div>
                </div>  
            </div>
            <div className="genre Latin">
                <button>Latin</button>
                <img className="genre-img" src={latin_img} alt="Latin icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Latin</span>
                        <span>Latin</span>
                        <span>Latin</span>
                        <span>Latin</span>
                    </div>
                </div>
            </div>
            <div className="genre Soul">
                <button>Soul</button>
                <img className="genre-img" src={soul_img} alt="Soul icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Soul</span>
                        <span>Soul</span>
                        <span>Soul</span>
                        <span>Soul</span>
                    </div>
                </div>
            </div>
            <div className="genre Blues">
                <button>Blues</button>
                <img className="genre-img" src={blues_img} alt="Blues icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Blues</span>
                        <span>Blues</span>
                        <span>Blues</span>
                        <span>Blues</span>
                    </div>
                </div>
            </div>
            <div className="genre R-n-B">
                <button>R-n-B</button>
                <img className="genre-img" src={rnb_img} alt="R&B icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>R-n-B</span>
                        <span>R-n-B</span>
                        <span>R-n-B</span>
                        <span>R-n-B</span>
                    </div>
                </div>
            </div>
            <div className="genre Reggae">
                <button>Reggae</button>
                <img className="genre-img" src={reggae_img} alt="Reggae icon"></img>
                <div className="effect">
                    <div className="effect-activate" aria-hidden="true">
                        <span>Reggae</span>
                        <span>Reggae</span>
                        <span>Reggae</span>
                        <span>Reggae</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Genres