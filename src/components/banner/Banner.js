import React,{useEffect, useState} from 'react'
import "./banner.css"
import axios from '../../axios'
import {API_KEY,Image_URL} from '../constants/constants'
function Banner() {
   const[movie,setMovie] = useState()
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((list)=>{
        let random = Math.floor(Math.random()*19)
        setMovie(list.data.results[random])
      })
    },[])
  return (
    <div className='banner' 
    style={{backgroundImage:`url( ${movie?Image_URL+movie.backdrop_path:''})`}}
    > 
      <div className="content">
        <h1 className="title">{movie?movie.title:''}</h1>
        <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My Playlist</button>
        </div>
        <h1 className="description">{movie?movie.overview:''} </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
