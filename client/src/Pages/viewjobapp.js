import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function ViewJobApp(props) {
    const email = localStorage.getItem("email");
    const position = localStorage.getItem("position");
    const location = localStorage.getItem("location");
    const company = localStorage.getItem("company");
    const [applic, setApplic] = useState([]);
    const [oursugg, setOurSugg] = useState([]);

    const mySetFun = (temail) => {
        localStorage.setItem("targetemail", temail);
    }

    Axios.post('http://localhost:3001/suggppl', {
        position: position,
        location: location,
        company: company
    }).then((response) => {
        setOurSugg(response.data);
    })

    const rejappl = (temail) => {
        Axios.post('http://localhost:3001/rejappl', {
            email: temail,
            position: position,
            location: location,
            company: company
        })
    }

    const jobacc = (temail) => {
        Axios.post('http://localhost:3001/jobaccept', {
            email: email,
            temail: temail,
            position: position,
            location: location,
            company: company
        })
    }

    Axios.post('http://localhost:3001/viewappl', {
        position: position,
        location: location,
        company: company
    }).then((response) => {
        setApplic(response.data);
    });

    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <h3>JOB APPLICANTS</h3>
        {applic.map((val, key) => {
            return <div>
                <br/>
                NAME: {val.Name} <br/>
                PROFESSION: {val.Profession} <br/>
                <Link to="/viewprofile"><button onClick={mySetFun(val.Email)}>VIEW PROFILE</button></Link> <br/><br/>
                <button onClick={() => {
                    jobacc(val.Email);
                    window.location.href='/viewmyjob';
                }}>ACCEPT</button>
                <button onClick={() => {
                    rejappl(val.Email);
                    window.location.href='/viewmyjob';
                }}>REJECT</button>
            </div>
        })}
        <br/>
        <div>
            <h3>OUR SUGGESTIONS</h3>
            {oursugg.map((val, key) => {
                return <div>
                    NAME: {val.Name} <br/>
                    EMAIL: {val.Email} <br/>
                    <br/>
                </div>
            })}
        </div>
        <Link to="/viewmyjob"><button className='buttonpro'>BACK</button></Link>
    </div>
}

export default ViewJobApp;