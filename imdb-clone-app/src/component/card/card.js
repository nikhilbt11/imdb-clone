import React from "react";
import './card.css'

function Card({movie}){


    return(
        
        <div className="cardContainer">
            <div className="cardDet">
                <h3>{movie.title}</h3>
                <p>Rating : {Math.floor(movie.vote_average).toFixed(1)}</p>
            </div>
            <img id="image" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img"/>
            
            
            </div>
           
    )
}

export default Card