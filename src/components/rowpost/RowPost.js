import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, Image_URL} from '../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies,setMovies] =  useState([])
    const [url,setUrl] =useState('')
   
    useEffect(()=>{
        axios.get(props.url).then((movies)=>{
            setMovies(movies.data.results)
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((obj)=>{
            console.log(obj.data.results[0]);
            if(obj.data.results.length){
                setUrl(obj.data.results[0])
            }else{
                console.log('Array is Empty');
            }
        })
      }    
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>{
                    return(
                        <div>
                        <img onClick={()=> handleMovie(obj.id)} className={props.isSmall?'isSmall':"poster"} alt='poster' src={`${Image_URL+obj.backdrop_path}`} />
                        <p>{obj.title}</p>
                        </div>
                    )
                })}
            </div>
            {url.key?  <YouTube className='video' videoId={url.key?url.key:''} opts={opts}  />:''}
        </div>
    )
}

export default RowPost      