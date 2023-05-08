import React from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar'
import logo from '../images/valogroup.jpg'

const Home = () =>  {
  return (
    <div className='home'>
        <Navbar /> 
        <img src={logo} alt=''></img>
    </div>
  )
}

export default Home
