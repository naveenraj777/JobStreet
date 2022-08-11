import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddSkill(props) {
    const email = localStorage.getItem("email");
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState(0);

    const addskills = () => {
        Axios.post('http://localhost:3001/addskills', {
            email: email,
            skill: skill,
            level: level
        })
        window.location.href="/skillsinfo";
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
        </div><br/>
        <div className='formpro'>
            <h3 className='title'>ADD SKILLS</h3>
            <table align="center">
                <tr>
                    <td><label>SKILL: </label></td>
                    <td><input className='form-control' type="text" placeholder="SKILL" 
                    onChange={(event) => {
                        setSkill(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>LEVEL: </label></td>
                    <td><input className='form-control' type="number" placeholder="LEVEL" 
                    onChange={(event) => {
                        setLevel(event.target.value);
                    }}/></td>
                </tr>
                <br/>
                <tr>
                    <td colSpan={2}><button className='buttonpro' onClick={addskills}>ADD</button></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddSkill;