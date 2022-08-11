import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddSchool(props) {
    const email = localStorage.getItem("email");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [year, setYear] = useState(0);
    const addschool = () => {
        Axios.post('http://localhost:3001/addschoolinfo', {
            email: email,
            name: name,
            grade: grade,
            year: year
        })
        window.location.href="/educationinfo"
    }
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
        <div class="addschool">
        <h2>ADD YOUR SCHOOL</h2>
        <table align="center">
            <tr><td><label>NAME: </label></td>
                <td><input type="text" placeholder="NAME" 
                onChange={(event) => {
                    setName(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>GRADE: </label></td>
                <td><input type="text" placeholder="GRADE" 
                onChange={(event) => {
                    setGrade(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>YEAR OF COMPLETION: </label></td>
                <td><input type="number" placeholder="YEAR" 
                onChange={(event) => {
                    setYear(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={addschool}>ADD</button></td>
            </tr>
        </table>
        </div>
    </div>
}

export default AddSchool;