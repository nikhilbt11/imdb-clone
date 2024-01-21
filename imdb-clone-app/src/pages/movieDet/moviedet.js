import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './moviedet.css'
import MovieLang from "../../component/movieLang/movielang";

function MovieDetails(){

    let {id} = useParams()
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    const[detail, setDetail] = useState({})

    async function getMovieDet(){
        try{
            const response = await fetch(url)
            const movieDet = await response.json()
            setDetail(movieDet)
            console.log(typeof((detail.spoken_languages)))

           // console.log(typeof(detail.original_title))
        }catch(err){
            console.log(err)
        }
        
    }
    

    useEffect(()=>{
        getMovieDet()
    },[id])

    return(
    < div className="bigC">
        <div className="movieBanner">
          <img src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} alt="img"/>
        </div>

        <div className="innerContainer">
            <div className="poster">
              <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt="img"/>
            </div>
        
        <div className="movieDet">
          <h2>{detail.original_title}</h2>
          <p>Released On : {detail.release_date}</p>
          <p>Rating : {Math.floor(detail.vote_average).toFixed(1)}/10</p>
          <p>Description : {detail.overview}</p>
          
        </div>
          
        </div>
    </div>
    )
}

export default MovieDetails