import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function CreatePosts(props) {

    const [title, setTitle] = useState("");
    const [cont, setCont] = useState("");
    const email = localStorage.getItem("email");
    const addpost = () => {
        let newDate = new Date();
        let date =  newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let dates = year+"-"+month+"-"+date;
        Axios.post('http://localhost:3001/addpost', {
            email: email,
            title: title,
            cont: cont,
            date: dates
        })
        window.location.href="/post";
    }
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <table align="center">
            <tr>
                <td><label>TITLE: </label></td>
                <td><input type="text" placeholder="TITLE" 
                onChange={(event) => {
                    setTitle(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>DESCRIPTION: </label></td>
                <td><textarea rows={10} cols={50} onChange={(event) => {
                    setCont(event.target.value);
                }}></textarea></td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={addpost}>MAKE POST</button></td>
            </tr>
        </table>
    </div>
}

export default CreatePosts;