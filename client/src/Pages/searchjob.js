import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function SearchJobs(props) {
    const email = localStorage.getItem("email");
    const [search, setSearch] = useState("");
    const [searchJobs, setSearchJobs] = useState([]);
    const searchjob = () => {
        Axios.post('http://localhost:3001/searchjob', {
            search: search
        }).then((response) => {
            setSearchJobs(response.data);
        })
    };

    const storePosition = (posit) => {
        localStorage.setItem("position", posit)
    };

    const storeCompany = (comp) => {
        localStorage.setItem("company", comp);
    }

    const storeLocation = (locat) => {
        localStorage.setItem("location", locat);
        window.location.href="/applyjob";
    }

    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <h3 className='title'>SEARCH YOUR JOB</h3>
        <div>
            <table align="center">
                <tr>
                    <td><label className='title1'>JOB </label></td>
                    <td><input type="text" placeholder="SEARCH" class="searchTerm"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}/></td>
                    <td><button onClick={searchjob} class="searchButton">🔍 </button></td>
                </tr>
            </table>
            {searchJobs.map((val, key) => {
                return <div>
                    <br/>
                    POSITION: {val.Position} <br/>
                    COMPANY: {val.Company} <br/>
                    LOCATION: {val.Location} <br/>
                    <button onClick={(event) => {
                        storePosition(val.Position);
                        storeCompany(val.Company);
                        storeLocation(val.Location);
                    }}>VIEW MORE</button><br/>
                </div>
            })}
        </div>
    </div>
}

export default SearchJobs;