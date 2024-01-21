import React from "react";
import { Link } from "react-router-dom";
import './header.css'


function Header(){
    return <div>

        <div id="header">
            <Link to="/"><img src="https://th.bing.com/th/id/OIP.cZOKBT9ApIbRZesBx_xOggHaEg?rs=1&pid=ImgDetMain" className="header_icon" alt="Img"/></Link>
           <div className="innerHeader">
            <Link className="links" id="pop" to="movies/popular"><h2>Popular</h2></Link>
            <Link className="links" id="top" to="movies/top_rated"><h2>Top Rated</h2></Link>
            <Link className="links" id="up" to="movies/upcoming"><h2>UpComing</h2></Link>
        </div>
        </div>

    </div>
}

export default Header