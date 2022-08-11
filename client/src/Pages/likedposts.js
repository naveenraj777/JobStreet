import React, { useState }  from 'react';
import { useRef } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function LikedPosts(props) {
    //const [like,setLike] = useState(false);
    
    const email = localStorage.getItem("email");
    //const title = localStorage.getItem("title");
    const [likedpostList, setLikedPostList] = useState([]);
    
    
  // const [titlemarker,setTitlemarker] = useState("");
  
    

  
    Axios.post('http://localhost:3001/likedpostinfo', {
        email: email
    }).then((response) => {
        setLikedPostList(response.data);
    })
  // console.log(postList);
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        
        <div className="vertical-menu">
                <a href="/profile">PERSONAL</a>
                <a href="/educationinfo">EDUCATION</a>
                <a href="/workinfo">WORK</a>
                <a href="/skillsinfo">SKILLS</a>
                <a href="/likedposts">LIKED POSTS</a>
        </div>
        
        <br/><br/>
        <div className="educationinfo">
       {/*  {titlemarker}
        {isliked} */}
        {likedpostList.map((val, key) => {
                    
                    return <div className="Post">
                    <header>
                      <div className="Post-user">
        
                        <div className="Post-user-profilepicture">
        
                          <img src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="John D. Veloper" />
        
                        </div>
          
                        <div className="Post-user-nickname">
                          
                          <div>{val.Email}</div>
                        
                        </div>
        
                      </div>
        
                    </header>
        
                    <div className="Post-image">
        
                      <div className="Post-image-bg">
        
                        {/* <img alt="Icon Living" src="[https://cdn-images-1.medium.com/max/1200/1*dMSWcBZCuzyRDeMr4uE_og.png]" /> */}
    
                    <div>{val.Content}</div>
                      </div>
        
                    </div>
        
                    <div className="Post-caption">
                     
                      <strong>{val.Title}<br/></strong> 
                   
                      
                    </div>
                  </div>
                  
        
                })}
      
                
        </div>
    </div>
}

export default LikedPosts;

