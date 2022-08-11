import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';

import Navbar from '../styles/Navbar';

import '../styles/button.css';
import '../styles/signup.css';

function EducationInfo(props) {
    const email = localStorage.getItem("email");
    const [collegeList, setCollegeList] = useState([]);
    const [schoolList, setSchoolList] = useState([]);
    Axios.post('http://localhost:3001/getcollege', {
        email: email
    }).then((response) => {
        setCollegeList(response.data);
    })
    Axios.post('http://localhost:3001/getschool', {
        email: email
    }).then((response) => {
        setSchoolList(response.data);
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
        <div class="educationinfo">
            <div>
                <h3>COLLEGE <Link to="/addcollege"><button className='buttonpro'>ADD COLLEGE</button></Link></h3>
               
                {collegeList.map((val, key) => {
                    return <div  className='grid'>
                        <div className='edutable'>
                        <table   align="center">
                            <tr>
                                <td><label>NAME: </label></td>
                                <td>{val.Name}</td>
                            </tr>
                            <tr>
                                <td><label>COURSE: </label></td>
                                <td>{val.Course}</td>
                            </tr>
                            <tr><td><label>GRADUATION: </label></td>
                                <td>{val.Graduation}</td>
                            </tr>
                            <tr>
                                <td><label>CGPA: </label></td>
                                <td>{val.CGPA}</td>
                            </tr>
                            <br/>
                        </table> 
                    </div>
                    </div>
                })}
               
            </div>
            <div>
                <h3>SCHOOL <Link to="/addschool"><button className='buttonpro'>ADD SCHOOL</button></Link></h3>
               
                {schoolList.map((val, key) => {
                    return <div className='grid'>
                        <div className='edutable'>
                        <table align="center">
                            <tr>
                                <td><label>NAME: </label></td>
                                <td>{val.Name}</td>
                            </tr>
                            <tr>
                                <td><label>GRADE: </label></td>
                                <td>{val.Grade}</td>
                            </tr>
                            <tr>
                                <td><label>YEAR OF STUDY: </label></td>
                                <td>{val.Year}</td>
                            </tr>
                            <br/>
                        </table>
                    </div>
                    </div>
                })}
                
            </div>
        </div>
    </div>
}

export default EducationInfo;

