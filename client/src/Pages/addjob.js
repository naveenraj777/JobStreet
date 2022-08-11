import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddJob(props) {
    const email = localStorage.getItem("email");
    const [company, setCompany] = useState("");
    const [domain, setDomain] = useState("");
    const [position, setPosition] = useState("");
    const [experience, setExperience] = useState("");
    const addjob = () => {
        Axios.post('http://localhost:3001/addjobinfo', {
            email: email,
            company: company,
            domain: domain,
            position: position,
            experience: experience
        })
        window.location.href="/workinfo"
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
        <div className='addjob'> 
            <h2>ADD JOB</h2>
            <table align="center">
                <tr>
                    <td><label>COMPANY: </label></td>
                    <td><input type="text" placeholder="COMPANY" 
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>DOMAIN: </label></td>
                    <td><input type="text" placeholder="DOMAIN" 
                    onChange={(event) => {
                        setDomain(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>POSITION: </label></td>
                    <td><input type="text" placeholder="POSITION" 
                    onChange={(event) => {
                        setPosition(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>EXPERIENCE: </label></td>
                    <td><input type="number" placeholder="YEARS" 
                    onChange={(event) => {
                        setExperience(event.target.value);
                    }}/></td>
                </tr>
                <br/>
                <tr>
                    <td colSpan={2}><button onClick={addjob}>ADD</button></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddJob;