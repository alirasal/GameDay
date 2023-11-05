import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import "./Home.css"

function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <div className='main-body'>
        <div>
            
            <button className='buttons' >Turfs</button>
            <button className='buttons'>Tournaments</button>
            <button className='buttons'>Offers</button>
            <button className='buttons'>Connect with us</button>
        </div>

        <h1 className='main-text' >Book your Turf now!!</h1>
        <div className='input-div'>
        <input className='search' type='text' placeholder='here we go'></input>
        </div>
        <button className='search-btn'>search</button>
        </div>
        <img className='img' src='src/hala.jpg'></img>
    </div>
  )
}

export default Home