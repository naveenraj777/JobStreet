import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddNewJob(props) {
    const email = localStorage.getItem("email");
    const [position, setPosition] = useState("");
    const [domain, setDomain] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const createjob = () => {
        Axios.post('http://localhost:3001/createjob', {
            email: email,
            position: position,
            domain: domain,
            company: company,
            location: location,
            description: description,
            skills: skills
        })
        window.location.href="/jobs"
    }
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        
        <div className='jobform'>
        <h3>ADD YOUR JOB</h3>
            <table  align="center">
                <tr>
                <td><label>POSITION: </label></td>
                <td><input type="text" placeholder="POSITION"
                onChange={(event) => {
                    setPosition(event.target.value);
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
                    <td><label>COMPANY: </label></td>
                    <td><input type="text" placeholder="COMPANY" 
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>LOCATION: </label></td>
                    <td><input type="text" placeholder="LOCATION" 
                    onChange={(event) => {
                        setLocation(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>DESCRIPTION: </label></td>
                    <td><textarea rows={5} cols={25} placeholder="ADD A BRIEF DESCRIPTION HERE"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}></textarea></td>
                </tr>
                <tr>
                    <td><label>PREFERRED SKILLS: </label></td>
                    <td><input type="text" placeholder="SKILLS" 
                    onChange={(event) => {
                        setSkills(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><button onClick={createjob} className='buttonpro'>CREATE</button></td>
                    <td><Link to="/postjob"><button className='buttonpro'>BACK</button></Link></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddNewJob;