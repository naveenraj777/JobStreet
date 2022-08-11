import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddPost(props) {
    const email = localStorage.getItem("email");
   // const title = localStorage.getItem("title");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
   // const [isliked, setisLiked] = useState(0);
    const [comment, setComment] = useState("");

    const addpost = () => {
        Axios.post('http://localhost:3001/addpost', {
            email: email,
            title: title, 
            content: content,
            
        })
        window.location.href="/team";
        //localStorage.setItem("title",title);
    }

   /*  const addlike = () => {
        Axios.post('http://localhost:3001/addlike',{
            email:email,
            title:title,
        })
    }
 */


    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <div class="vertical-menu">
                <a href="/profile">PERSONAL</a>
                <a href="/educationinfo">EDUCATION</a>
                <a href="/workinfo">WORK</a>
                <a href="/skillsinfo">SKILLS</a>
        </div>
        <div class="formpro">
            <h2>ADD YOUR POST</h2>
            <table align="center">
                <tr>
                    <td><label>Title: </label></td>
                    <td><input className='form-control' type="text" 
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>Content: </label></td>
                    <td><input className='form-control' type="text" 
                    onChange={(event)=> {
                        setContent(event.target.value);
                    }}/></td>
                </tr>
               {/*  <tr>
                    <td><label>Comment</label></td>
                    <td><textarea rows="4" cols="25" type="text" 
                    onChange={(event)=> {
                        setComment(event.target.value);
                    }}/></td>
                </tr> */}
                
                <tr>
                    <td colSpan={2}><button className='buttonpro' onClick={ ()=>{
                          addpost();
                          //addlike();
                        } }>ADD POST</button></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddPost;