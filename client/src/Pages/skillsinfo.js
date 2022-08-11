import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function SkillsInfo(props) {
    const email = localStorage.getItem("email");
    const [skillList, setSkillList] = useState([]);
    Axios.post('http://localhost:3001/getskills', {
        email: email
    }).then((response) => {
        setSkillList(response.data);
    })
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
        <div className='educationinfo'>
            <br/><br/>
            <h3 className='title1'>ADD YOUR SKILLS <Link to="/addskills"><button className='buttonpro'>ADD MORE</button></Link></h3>
           
            {skillList.map((val, key) => {
                return <div className='grid'>
                    <div className='edutable'>
                    <h5>SKILL: {val.Name}</h5>
                    <p>LEVEL: {val.Level}</p>
                </div>
                </div>
            })}
        </div><br/><br/>
        
    </div>
}

export default SkillsInfo;