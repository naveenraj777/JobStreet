import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddWork(props) {
    const email = localStorage.getItem("email");
    const [internshipinfo, setInternshipInfo] = useState([]);
    const [workInfo, setWorkInfo] = useState([]);
    Axios.post('http://localhost:3001/getinternshipinfo', {
        email: email
    }).then((response) => {
        setInternshipInfo(response.data);
    })
    Axios.post('http://localhost:3001/getworkinfo', {
        email: email
    }).then((response) => {
        setWorkInfo(response.data);
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
        <div class="educationinfo"><br/>
            <h3 className='title'>WORK DETAILS</h3>
            <h4 className='title1'>INTERNSHIPS  <Link to="/addinternship"><button className='buttonpro'>ADD INTERNSHIPS</button></Link><br/><br/><br/></h4>
            {internshipinfo.map((val, key) => {

                return <div className='grid'>
                    <div className='edutable'>
                    <table align="center">
                        <tr>
                            <td><label>COMPANY: </label></td>
                            <td>{val.Company}</td>
                        </tr>
                        <tr>
                            <td><label>DOMAIN: </label></td>
                            <td>{val.Domain}</td>
                        </tr>
                        <tr>
                            <td><label>PERIOD: </label></td>
                            <td>{val.Period}</td>
                        </tr>
                    </table>
                    <br/>
                </div>
                </div>
            })}
            <br/><br/>
            
        </div>
        
        
            <div>
            
            <h4 className='title1'>JOB DETAILS <Link to="/addjob"><button  className='buttonpro'>ADD JOBS</button></Link></h4>     
            {workInfo.map((val, key) => {
                
                return <div className='grid'>
                     
                    <div className='edutable'>
                <table align="center">
                    <tr>
                        <td><label>COMPANY: </label></td>
                        <td>{val.Company}</td>
                    </tr>
                    <tr>
                        <td><label>DOMAIN: </label></td>
                        <td>{val.Domain}</td>
                    </tr>
                    <tr>
                        <td><label>POSITION: </label></td>
                        <td>{val.Position}</td>
                    </tr>
                    <tr>
                        <td><label>YEARS OF EXPERIENCE: </label></td>
                        <td>{val.Experience}</td>
                    </tr>
                </table>
                <br/>
                </div>
                </div>
            })}<br/><br/>
           
        </div>
    </div>
}

export default AddWork;