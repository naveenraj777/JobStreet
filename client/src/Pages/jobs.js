import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';

import Navbar from '../styles/Navbar';

function Jobs(props) {
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <div className='jobdiv'>
            <table className='jobtab' align="center">
                <tr>
                   <td><div><Link to="/postjob"><img className='jobimg' src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg" /><br/><button className='buttonpro'>POST JOBS</button></Link></div></td> 
                    <td><div style={{marginRight:"20px"}}><Link to="/searchjob"><img  className='jobimg' src="https://fistfuloftalent.com/wp-content/uploads/2020/08/Get-a-Job.jpg" /><br/><button className='buttonpro'>SEARCH JOBS</button></Link></div></td>
                </tr>
            </table>
        </div>
    </div>
}

export default Jobs;