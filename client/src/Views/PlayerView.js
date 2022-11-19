import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import _axios from 'axios';
import { env } from '../env';
import MusicPlayer from "../components/Player/MusicPlayer";


const axios = _axios.create({ baseURL: env.appServer });

const PlayerView = () => {

    const [playlist, setPlaylist] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/playlist")
            .then(response => response.data ? setPlaylist(response.data) : navigate('/'))
            .catch(e => navigate('/'));
    },[]);

    return (
        <div>
           <MusicPlayer/>
        </div>

    );
};

export default PlayerView;