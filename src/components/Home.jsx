import React from 'react'
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate=useNavigate()

    const toNavigate=()=>{

      navigate('/login');

    }


  return (
    <>
    <div className="home">
      <Header />

      <div className="hi">
        <h1>
           "Explore a Vast Movie Collection"<br /><br />
          "Never Miss a Movie You Love"<br />
        </h1><br />
        <button onClick={toNavigate}>GET STARTED {'>'} </button>
      </div>
    </div>
  </>
  )
}

export default Home