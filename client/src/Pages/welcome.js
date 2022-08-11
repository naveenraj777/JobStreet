import React from "react";
import logo from "../images/logo.png";
import welcomeimage from "../images/welcomeimage.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Welcome() {
    return <div>
            <div class="flex-container">
                <div class="logo"><img src={logo}  class="logo"/></div>
                <div class='logo1'><h2 class='jobstreet'>JOBSTREET</h2></div>
            </div>
           
            <br/><br/>
        <div class='btns'>   
       
        <Link to="/signup"><button class='button-73'>SIGNUP</button></Link>
        <Link to="/login"><button  style={{ marginLeft: '2rem' }} class='button-73'>LOGIN</button></Link>
        </div>
    </div>
}

export default Welcome;