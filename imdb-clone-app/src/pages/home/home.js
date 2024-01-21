import React, {useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'
import { Link } from "react-router-dom";
import MovieList from "../../component/movieList/movielist";


function Home(){
 
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    const [imgURl, setURl] = useState([])
   
     
    async function home(){
      try{
      const response = await fetch(url)
      const apiData = await response.json()
      setURl(apiData.results)
      }catch(err){
        console.log(err)
      }
    } 
    
    useEffect(()=>{
      home()
    },[])

    return <div className="carol">
        <Carousel 
        showThumbs={false}        
        autoPlay={true}
        interval={2000}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        >
         {

           imgURl.map((item)=>{
            return (
              <Link to={`movie/${item.id}`} id="link">
                <div className="container">
                <img id="image" src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`} alt="img"/>
                <div id="movieDet">
                <h1 id="movieName" className="details" >{item.title}</h1>
                <p id="releaseDate" className="details" >Released on : {item.release_date}</p>
                <p id="rating" >Rating : {Math.floor(item.vote_average).toFixed(1)}/10</p>
                <p id="overview" className="details" >{item.overview}</p>
               </div>
               </div>
              </Link>
            )
            
            
            
           })
             
         }
      
        </Carousel>
        <MovieList/>
    </div>
}

export default Home