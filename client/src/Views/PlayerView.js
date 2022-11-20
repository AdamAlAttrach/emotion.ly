import React, { useEffect, useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import _axios from 'axios';
import { env } from '../env';
import MusicPlayer from "../components/Player/MusicPlayer";


const axios = _axios.create({ baseURL: env.appServer });

const PlayerView = () => {

    const [playlist, setPlaylist] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const params = {
                    text: "I am so sad",
                    genres: "hip-hop, classical"
    }
    useEffect(() => {
        axios.get("/playlist", {params})
            .then(response => response.data ? setPlaylist(response.data) : navigate('/'))
            .catch(e => navigate('/'));
    },[]);
    
    function data(songs){
        return songs.map((song, index) => {
            if (index == 0){
                return {...song, active: "True", color: ["#CD607D", "#c94043"]}
            }
            else{
                return {...song, color: ["#CD607D", "#c94043"]}
            }
        })
    }
        
        
    
    return (
        <div>
            <MusicPlayer songs = {data(playlist)}/>
        </div>

    );
};

export default PlayerView;