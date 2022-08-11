import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function Comment(props) {
    const email = localStorage.getItem("email");
    const title = localStorage.getItem("title");
  //  const [collegeList, setCollegeList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState("");
    //const [commentmarker, setCommentmarker] = useState("");
    let titlemarker = "";
    let setTitlemarker = (y)=>{
      titlemarker = y;
      localStorage.setItem("title",y);
    }
    let commentmarker = "";
    let setCommentmarker = (y)=>{
        commentmarker = y;
      
    }
    const deletecomment = ()=>{
       
        Axios.post('http://localhost:3001/deletecomment', {
        title:title,
        delcomment:commentmarker
    })
    }
    Axios.post('http://localhost:3001/getcomments', {
        title:title
    }).then((response) => {
        setCommentList(response.data);
    })
    //console.log(commentList);
   const addcomment = ()=>{
        Axios.post('http://localhost:3001/addcomment', {
            email: email,
            title:title,
            comment:comment
        })
    }

    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <div className="vertical-menu">
                <a href="/profile">PERSONAL</a>
                <a href="/educationinfo">EDUCATION</a>
                <a href="/workinfo">WORK</a>
                <a href="/skillsinfo">SKILLS</a>
        </div>
        <div className="educationinfo">
            <div><br/><br/>
                {commentList.map((val, key) => {
                    return <div className='grid'>
                        <div className='edutable'>
                        <table align="center">
                       {/*  <tr><td><label>TITLE: </label></td>
                                <td>{val.Title}</td>
                            </tr> */}
                            <tr>
                                <td><label>EMAIL: </label></td>
                                <td>{val.Email}</td>
                            </tr>
                            <tr>
                                <td><label>COMMENTS: </label></td>
                                <td>{val.Comment}</td>
                            </tr>
                           <tr><button onClick={ ()=>{
                          setTitlemarker(val.Title);
                          setCommentmarker(val.Comment);
                          deletecomment();
                        } } className='buttonpro smallbutton'>Delete comment</button></tr>
                            <br/>
                        </table> 
                    </div>
                    </div>
                })}
                
               
            </div>
            <br/><br/>
                 <textarea rows="4" cols="25" type="text" 
                    onChange={(event)=> {
                        setComment(event.target.value);
                    }}/><br/><br/>
                     <Link to="/team"><button className='buttonpro' onClick={addcomment}>ADD Comment</button></Link>
            
        </div>
    </div>
}

export default Comment;

