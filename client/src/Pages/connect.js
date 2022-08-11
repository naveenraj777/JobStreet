import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function Connect(props) {

    const email = localStorage.getItem("email");
    const [getConnectReq, setGetConnectReq] = useState([]);
    const [getConnReqSent, setGetConnReqSent] = useState([]);
    const [getMyConn, setGetMyConn] = useState([]);

    const profileinfo = (temail) => {
        localStorage.setItem("targetemail", temail);
    }

    const acceptconn = (temail) => {
        Axios.post('http://localhost:3001/acceptconn', {
            email1: temail,
            email2: email
        })
    };

    const delconnreq = (temail) => {
        Axios.post('http://localhost:3001/delconnreq', {
            email1: temail,
            email2: email
        })
    };

    const rejconnreq = (temail) => {
        Axios.post('http://localhost:3001/rejconnreq', {
            email1: email,
            email2: temail
        })
    };

    Axios.post('http://localhost:3001/getconnectreq', {
        email: email
    }).then((response) => {
        setGetConnectReq(response.data);
    })

    Axios.post('http://localhost:3001/getconnectreqsent', {
        email: email
    }).then((response) => {
        setGetConnReqSent(response.data);
    })

    Axios.post('http://localhost:3001/getmyconn', {
        email: email
    }).then((response) => {
        setGetMyConn(response.data);
    })
    
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <br/><br/><br/>
        <div >
            {/* <button>COMPANY</button> */}
            <Link to="/connectpeople"><img className='jobimg' src="https://previews.123rf.com/images/yupiramos/yupiramos1508/yupiramos150802464/43905378-connect-people-design-vector-illustration-eps-10-.jpg"/></Link>
        </div>
        <br/>
        <div>
            <div className='title'>CONNECTION REQUESTS</div><br/>
            {getConnectReq.map((val, key) => {
                return <div className='grid'>
                    <div className='edutable'>
                    NAME: {val.Name} <br/>
                    PROFESSION: {val.Profession}
                    <br/>
                    <Link to="/viewprofile"><button  className='buttonpro smallbutton' onClick={profileinfo(val.Email)}>VIEW PROFILE</button></Link>
                    <button className='buttonpro smallbutton' onClick={() => {
                        acceptconn(val.Email);
                        delconnreq(val.Email);
                    }}>ACCEPT</button>
                    <button  className='buttonpro smallbutton' onClick={() => {
                        rejconnreq(val.Email);
                    }}>REJECT</button>
                    <br/>
                </div>
                
                </div>
                
            })}
            
        </div>
        <br/><br/>
        <div>
            <h3 className='title'>REQUESTS SENT</h3>
            {getConnReqSent.map((val, key) => {
                return <div className='grid'>
                    <div className='edutable'>
                    NAME: {val.Name} <br/>
                    PROFESSION: {val.Profession}<br/>
                    <button className='buttonpro' onClick={() => {
                        rejconnreq(val.Email);
                    }}>WITHDRAW</button>
                </div>
                </div>
            })}
        </div>
        <br/><br/>
        <div>
            <h3 className='title'>MY CONNECTIONS</h3>
            {getMyConn.map((val, key) => {
                return <div className='grid'>
                    <div className='edutable'>
                    NAME: {val.Name}
                </div>
                </div>
            })}
        </div>
        <br/>
    </div>
}

export default Connect;