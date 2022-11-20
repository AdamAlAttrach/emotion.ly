import React, { useEffect, useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import _axios from 'axios';
import { env } from '../env';
import MusicPlayer from "../components/Player/MusicPlayer";



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
    useEffect(() => {
        axios.get('/playlist', {params: par})
            .then(response => response.data ? setPlaylist(response.data) : navigate('/'))
            .catch(e => navigate('/'));
    },[]);

    return (
        <div>
            {playlist ? <MusicPlayer playlist = {playlist.tracks}/> : console.log("Error")}
        </div>

    );
};

export default PlayerView;