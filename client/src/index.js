import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicPlayer from './components/Player/MusicPlayer';
import PlayerView from './Views/PlayerView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/playlist' element={<PlayerView/>} />
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
 
);

