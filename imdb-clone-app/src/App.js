import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./component/header/header";
import './index.css'
import Home from "./pages/home/home";
import MovieList from "./component/movieList/movielist";
import MovieDetails from "./pages/movieDet/moviedet";
import Footer from "./component/footer/footer";

// import './App.css'

function App(){
  return  <div className="App">
    
    <Router>
    <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetails/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}>Movies TYpe</Route>
        <Route path="/*" element={<h1>dd</h1>}></Route>

      </Routes>
      <Footer/>
    </Router>
  </div>
}


export default App