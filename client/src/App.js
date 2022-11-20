import React from 'react'
import Layout from "./components/Layout"
import './index.css'

function App() {
  const navigate = useNavigate();

  function toPlayer(){
    navigate('/playlist', {state:{text:"I love cock and I am happy to be gay", genres:'hip-hop'}})
  }

  return (
    <div>
      <Layout />
    </div>

  )
}

export default App