import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../card/card";
import './movielist.css'

function MovieList(){

   let {type} = useParams()
   const [movies, setMovies] = useState([])
   const url = `https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    
   async function getData(){
    try{
        const response = await fetch(url)
        const apiDeta = await response.json()
        setMovies(apiDeta.results)
    }catch(err){

    }
    
   }

   useEffect(()=>{
    getData()
   },[type])

    return(
        <>
        <h1>{type?type.toUpperCase():"Popular"}  Movies</h1>
        <div className="movieListContainer">
        {
            movies.map((item)=>{
             return (
             <Link to={`/movie/${item.id}`} style={{textDecoration : "none"}}>
             <Card movie = {item}/>
             </Link>)
            })
        }
        </div>

        </>
        
    )
}

export default MovieList
