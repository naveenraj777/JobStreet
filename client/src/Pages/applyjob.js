import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function ApplyJob(props) {
    const email = localStorage.getItem("email");
    const position = localStorage.getItem("position");
    const company = localStorage.getItem("company");
    const location = localStorage.getItem("location");
    const [applied, setApplied] = useState([]);
    const [abtcomp, setAbtComp] = useState([]);
    Axios.post('http://localhost:3001/getjobapp', {
        email: email,
        position: position,
        company: company,
        location: location
    }).then((response) => {
        const obj = Object.values(response.data);
        if(obj.length>0) {
            document.getElementById("applybtn").disabled = true;
        }
    })
    Axios.post('http://localhost:3001/aboutjob', {
        position: position,
        company: company,
        location: location
    }).then((response) => {
        setAbtComp(response.data);
    })

    const applyjob = () => {
        Axios.post('http://localhost:3001/applyjob', {
            email: email,
            position: position,
            company: company,
            location: location
        })
        window.location.href="/searchjob";
    }

    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <h3>ABOUT JOB</h3>
        {abtcomp.map((val, key) => {
            return <div>
                COMPANY: {val.Company} <br/>
                POSITION: {val.Position} <br/>
                DOMAIN: {val.Domain} <br/>
                LOCATION: {val.Location} <br/>
                DESCRIPTION: {val.Description} <br/>
                SKILLS: {val.Skills} <br/>
                <br/>
                <button onClick={applyjob} id="applybtn">APPLY</button>
                <Link to="/searchjob"><button>BACK</button></Link>
            </div>
        })}
    </div>
}

export default ApplyJob;