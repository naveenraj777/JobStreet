import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function ViewMyJob(props) {
    const email = localStorage.getItem("email");
    const [myJobs, setMyJob] = useState([]);
    const setFun = (pos, loc, com) => {
        localStorage.setItem("position", pos);
        localStorage.setItem("company", com);
        localStorage.setItem("location", loc);
    }
    Axios.post('http://localhost:3001/viewmyjobs', {
        email: email
    }).then((response) => {
        setMyJob(response.data);
    })
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar /><br/>
        <h3 className='logintitle'>MY JOBS</h3><br/>
        {myJobs.map((val, key) => {
            return <div className='grid'>
                <div className='edutable'>
                <br/>
               <strong>POSITION    :</strong>     {val.Position}<br/>
               <strong>DOMAIN      :</strong> {val.Domain} <br/>
               <strong>COMPANY     :</strong> {val.Company} <br/>
               <strong>LOCATION    :</strong>{val.Location} <br/>
               <strong>DESCRIPTION :</strong>{val.Description} <br/>
               <strong>SKILLS      :</strong> {val.Skills} <br/><br/>
                <Link to="/viewjobapp"><button className='buttonpro' onClick={setFun(val.Position, val.Location, val.Company)}>VIEW APPLICANTS</button></Link><br/>
                </div>
            </div>
        })}
        <br/><br/>
        <Link to="/postjob"><button className='buttonpro'>BACK</button></Link>
    </div>
}

export default ViewMyJob;