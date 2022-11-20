import React from 'react'
import InputText from './components/InputText/InputText'
import Layout from "./components/InputText/InputText"
import './index.css'
import Genres from './components/genres/Genres'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  function toPlayer(){
    navigate('/playlist', {state:{text:"I love cock and I am happy to be gay", genres:'hip-hop'}})
  }

  return (
    <div>
      <button onClick = {() => toPlayer()}>Test</button>
      <InputText />
      <Genres />

    </div>

  )
}

export default App