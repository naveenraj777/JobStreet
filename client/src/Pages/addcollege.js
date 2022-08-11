import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddCollege(props) {
    const email = localStorage.getItem("email");
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [grad, setGraduation] = useState(0);
    const [cgpa, setCgpa] = useState("");

    const addcollege = () => {
        Axios.post('http://localhost:3001/addcollegeinfo', {
            email: email,
            name: name, 
            course: course,
            grad: grad,
            cgpa: cgpa
        })
        window.location.href="/educationinfo"
    }
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <div className="vertical-menu">
                <a href="/profile">PERSONAL</a>
                <a href="/educationinfo">EDUCATION</a>
                <a href="/workinfo">WORK</a>
                <a href="/skillsinfo">SKILLS</a>
        </div>
        <div   className='formpro'  >
            <h2>ADD YOUR COLLEGE</h2>
            <table align="center">
                <tr>
                    <td><label>NAME: </label></td>
                    <td><input className='form-control' type="text" placeholder="College Name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>COURSE: </label></td>
                    <td><input className='form-control' type="text" placeholder="Course Name"
                    onChange={(event)=> {
                        setCourse(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>YEAR OF GRADUATION</label></td>
                    <td><input className='form-control' type="number" placeholder="Year of Graduation"
                    onChange={(event)=> {
                        setGraduation(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>CGPA: </label></td>
                    <td><input className='form-control' type="number" placeholder="CGPA"
                    onChange={(event) => {
                        setCgpa(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button className='buttonpro' onClick={addcollege}>ADD</button></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddCollege;