import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function AddInterships(props) {

    const email = localStorage.getItem("email");
    const [company, setCompany] = useState("");
    const [domain, setDomain] = useState("");
    const [period, setPeriod] = useState("");

    const addintern = () => {
        Axios.post('http://localhost:3001/addinterninfo', {
            email: email,
            company: company,
            domain: domain,
            period: period
        })
        window.location.href = "/workinfo";
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
        <br/><br/>
        <div class="formpro">
            <h2>ADD INTERNSHIP</h2>
            <table align="center">
                <tr>
                    <td><label>COMPANY: </label></td>
                    <td><input className='form-control' type="text" placeholder="COMPANY" 
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>DOMAIN: </label></td>
                    <td><input className='form-control' type="text" placeholder="DOMAIN" 
                    onChange={(event) => {
                        setDomain(event.target.value);
                    }}/></td>
                </tr>
                <tr>
                    <td><label>PERIOD: </label></td>
                    <td><input className='form-control' type="text" placeholder="PERIOD"
                    onChange={(event) => {
                        setPeriod(event.target.value);
                    }}></input></td>
                </tr>
                <br/>
                <tr>
                    <td colSpan={2}><button className='buttonpro' onClick={addintern}>ADD</button></td>
                </tr>
            </table>
        </div>
    </div>
}

export default AddInterships;