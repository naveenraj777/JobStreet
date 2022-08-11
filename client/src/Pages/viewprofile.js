import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';
import { ThemeProvider } from 'styled-components';

function ViewProfile(props) {
    const email = localStorage.getItem("email");
    const targetemail = localStorage.getItem("targetemail");
    const [userpersonalprofile, setUserPersonalProfile] = useState([]);
    const [userschoolprofile, setUserSchoolProfile] = useState([]);
    const [usercollegeprofile, setUserCollegeProfile] = useState([]);
    const [userskillprofile, setUserSkillProfile] = useState([]);
    const [userConnCount, setUserConnCount] = useState([]);
    
    const connectreq = () => {
        Axios.post('http://localhost:3001/sendconnectreq', {
            femail: email, 
            temail: targetemail
        })
    }

    Axios.post('http://localhost:3001/checkConnReq', {
        email1: email,
        email2: targetemail
    }).then((response) => {
        const obj = Object.values(response.data);
        if(obj.length==1) {
            document.getElementById("connectbtn").disabled = true;
        }
    })

    Axios.post('http://localhost:3001/checkConn', {
        email1: email,
        email2: targetemail
    }).then((response) => {
        const obj = Object.values(response.data);
        if(obj.length>0) {
            document.getElementById("connectbtn").disabled = true;
        }
    })

    Axios.post('http://localhost:3001/viewpersonalprofile', {
        email: targetemail
    }).then((response) => {
        setUserPersonalProfile(response.data);
    })

    Axios.post('http://localhost:3001/viewschoolprofile', {
        email: targetemail
    }).then((response) => {
        setUserSchoolProfile(response.data);
    })

    Axios.post('http://localhost:3001/viewcollegeprofile', {
        email: targetemail
    }).then((response) => {
        setUserCollegeProfile(response.data);
    })

    Axios.post('http://localhost:3001/viewskillprofile', {
        email: targetemail
    }).then((response) => {
        setUserSkillProfile(response.data);
    })

    Axios.post('http://localhost:3001/viewconncount', {
        email: targetemail
    }).then((response) => {
        setUserConnCount(response.data);
    })

    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar /><br></br><br/>
        <h4 className='logintitle'>PERSONAL INFORMATION</h4>
        {userpersonalprofile.map((val, key) => {
            return <div className='grid'>
                <div className='edutable'>
                NAME: {val.Name} <br/>
                PROFESSION: {val.Profession}
            </div>
            </div>
        })}
        <br/><br/>
        <h4 className='logintitle'>SCHOOL INFORMATION</h4>
        {userschoolprofile.map((val, key) => {
            return <div className='grid'>
            <div className='edutable'>
                SCHOOL NAME: {val.Name}
                <br/>
                GRADE: {val.Grade}
                <br/>
                YEAR OF COMPLETION: {val.Year}
                <br/><br/>
            </div></div>
        })}
        <br/><br/>
        <h4 className='logintitle'>COLLEGE INFORMATION</h4>
        {usercollegeprofile.map((val, key) => {
            return <div className='grid'>
            <div className='edutable'>
                COLLEGE NAME: {val.Name}
                <br/>
                COURSE: {val.Course}
                <br/>
                GRADUATION: {val.Graduation}
                <br/>
                CGPA: {val.CGPA}
                <br/><br/>
            </div></div>
        })}
        <br/><br/>
        <h4 className='logintitle'>SKILL INFORMATION</h4>
        {userskillprofile.map((val, key) => {
            return <div>
                SKILL: {val.Name}
                <br/>
                LEVEL: {val.Level}
                <br/><br/>
            </div>
        })}
        <br/><br/>
        <h4 className='logintitle'>CONNECTIONS</h4>
        {userConnCount.map((val, key) => {
            return <div>
                NUMBER OF CONNECTIONS: {val.Conncount}
            </div>
        })}
        <br/><br/>
        <Link to="/connectpeople"><button className='buttonpro'>BACK</button></Link>
        <Link to="/connectpeople"><button className='buttonpro' onClick={connectreq} id="connectbtn">CONNECT</button></Link>
    </div>
}

export default ViewProfile;