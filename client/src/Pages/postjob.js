import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function PostJobs(props) {
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <div>
            <table style={{width:"20%",marginTop:"10%"}} align="center">
                <tr>
                    <td><Link to="/addnewjob"><img className='jobimg' src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg" /><button className='buttonpro'>ADD JOB</button></Link></td>
                    <td><Link to="/viewmyjob"><img className='jobimg' src="https://www.clipartkey.com/mpngs/m/22-223133_job-market-cliparts-jobs-clipart.png" /><button className='buttonpro'>MY JOBS</button></Link></td>
                </tr>
            </table>
        </div>
    </div>
}

export default PostJobs;