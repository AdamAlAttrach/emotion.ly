import React, { useEffect, useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import _axios from 'axios';
import { env } from '../env';
import MusicPlayer from "../components/Player/MusicPlayer";
import Loader from "./Loader";



const axios = _axios.create({ baseURL: env.appServer });

const PlayerView = () => {

    const [playlist, setPlaylist] = useState(null)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const par = {
                    text: location.state.text,
                    genres: location.state.genres
    }
  
    const getting_data = async () => {
        try {
        const data = await axios 
            .get('/playlist', {params: par})
            .then(response => response.data ? setPlaylist(response.data) : navigate('/'))
             setLoading(true)
        } catch(e) {
            console.log(e)
        }
    };
    
    useEffect(()=>{
        getting_data()
    },[])

    return (
        <div> 
            {loading ? (<MusicPlayer playlist = {playlist.tracks}/>) : (<Loader/>)}
        </div>
 
    );
};

export default PlayerView;