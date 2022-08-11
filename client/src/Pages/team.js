import React, { useState }  from 'react';
import { useRef } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function Team(props) {
    //const [like,setLike] = useState(false);
    
    const email = localStorage.getItem("email");
    //const title = localStorage.getItem("title");
    const [postList, setPostList] = useState([]);
    //const [isliked, setLiked] = useState(false);
    let isliked = false;
    let setLiked = (x)=>{
      isliked = x;
    }
    let titlemarker = "";
    let setTitlemarker = (y)=>{
      titlemarker = y;
      localStorage.setItem("title",y);
    }
    
  // const [titlemarker,setTitlemarker] = useState("");
  const deletepost = ()=>{
    Axios.post('http://localhost:3001/deletepost',{
      title:titlemarker
    })
  }
    
    const setLike = ()=>{
      //const title = titlemarker;
      //const isLiked = isliked;
      Axios.post('http://localhost:3001/updatelikeinfo',{
        title:titlemarker,
        isLiked:isliked,
        email:email
      })
     /*  setTitlemarker("");
      setLiked(false); */
   }
  
    Axios.post('http://localhost:3001/getpostinfo', {
        email: email
    }).then((response) => {
        setPostList(response.data);
    })

   //console.log(postList);
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
        
        {postList.map((val, key) => {
                    
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
    
    <div>{val.Title}</div>
                      </div>
        
                    </div>
        
                    <div className="Post-caption">
                     
                      <strong>{val.Content}<br/></strong> 
                   
{/*                       <div className="heart-like-button" onClick={ ()=>{
                          setTitlemarker(val.Title);
                          setLiked(val.isLiked);
                          setLike();
                        } } >{val.isLiked?"💖":"🤍"}</div> */}

<div className='flex-container'>
<div className="heart-like-button" onClick={ ()=>{
                          setTitlemarker(val.Title);
                          setLiked(val.isLiked);
                          setLike();
                        } } >{val.isLiked ? <FaHeart style={{ color: 'red', fontSize: '1.5rem' }} /> : <FaRegHeart style={{ color: 'black', fontSize: '1.5rem' }} />}</div>




                       {/*  <Link to="/comment"> <button onClick={ ()=>{
                          setTitlemarker(val.Title);

                        } }>💬</button></Link>
 */}

<Link className='link' to="/comment">
                <div className="heart-like-button" onClick={ ()=>{
                          setTitlemarker(val.Title);

                        } }><FaRegComment style={{ color: 'black', fontSize: '1.5rem' }} /></div></Link>

                     
                      {/*   <button onClick={ ()=>{
                          setTitlemarker(val.Title);
                          deletepost();
                        } }>Delete post</button> */}


<div className="heart-like-button" onClick={ ()=>{
                          setTitlemarker(val.Title);
                          deletepost();
                        } }><MdDelete style={{ color: 'black', fontSize: '1.5rem' }} /></div>

                    </div>
                  </div>
</div>
                })}
        <Link to="/addpostpage"><button className='buttonpro'>ADD POST</button></Link>
                
        </div>
    </div>
}

export default Team;

