import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'
import '../styles/home.css'


function Home() {
  const NASA_API = "https://api.nasa.gov/planetary/apod?api_key=hj5N0n7RI7h4FXPfaIpUBdqRZH4ASqxUQO9tnV3N"
  let [astronomy, setAstronomy] = useState({image:"", title:"", description:""})

  const updateAstronomy = astronomy => setAstronomy(astronomy)
  const getNASA = () => {
    return axios.get(NASA_API)
  }
  
  useEffect( () => {
    let response =  getNASA()
    
    response.then(nasaData => {
      updateAstronomy({...astronomy, image: nasaData.data.hdurl, title: nasaData.data.title, description: nasaData.data.explanation })
    }, [])

  })

  return <MediaCard className="image-style-home" astronomy={astronomy}/>
}

export default Home;
