import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import '../Components/jobstreet.css';
import '../styles/verticalmenu.css';
import Navbar from '../styles/Navbar';

function Connectpeople(props) {
    const email = localStorage.getItem("email");
    const [recommendConnectListCol, setRecommendConnectListCol] = useState([]);
    const [recommendConnectListSch, setRecommendConnectListSch] = useState([]);
    const [targetemail, setTargetEmail] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchByName, setSearchByName] = useState([]);
    Axios.post('http://localhost:3001/connectpeoplereccol', {
        email: email
    }).then((response) => {
        setRecommendConnectListCol(response.data);
    })
    Axios.post('http://localhost:3001/connectpeoplerecsch', {
        email: email
    }).then((response) => {
        console.log(response.data);
        setRecommendConnectListSch(response.data);
    })
    const searchbyname = () => {
    Axios.post('http://localhost:3001/searchbyname', {
        name: searchName
    }).then((response) => {
        setSearchByName(response.data);
    })
    }
    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <h4 className='title'>PEOPLE YOU MAY KNOW</h4>
        {recommendConnectListCol.map((val, key) => {
            return <div className='grid'>
                <div className='edutable'>
                {val.Name}<br/>
                {val.Profession}<br/>
                <button onClick={(event) => {
                    setTargetEmail(val.Email)
                    localStorage.setItem("targetemail", val.Email)
                    window.location.href = "/viewprofile"
                }}>VIEW PROFILE</button>
            </div>
            </div>
        })}
        {recommendConnectListSch.map((val, key) => {
             return <div className='grid'>
             <div className='edutable'>
                {val.Name} <br/>
                {val.Profession} <br/>
                <button onClick={(event) => {
                    setTargetEmail(val.Email)
                    localStorage.setItem("targetemail", val.Email);
                    window.location.href = "/viewprofile";
                }}>VIEW PROFILE</button>
            </div>
            </div>
        })}
        <br/><br/>
        <table align="center">
            <tr>
                <td><label className='title1'>ENTER NAME TO SEARCH: </label></td>
                {/* <td><input type="text" placeholder="NAME" 
                onChange={(event) => {
                    setSearchName(event.target.value)
                }}/></td>
                <td><button onClick={searchbyname}>SEARCH</button></td> */}

                <td><input type="text" class="searchTerm" placeholder="What are you looking for?"   onChange={(event) => {
                    setSearchName(event.target.value)
                }}/></td>
     <td> <button onClick={searchbyname} class="searchButton">🔍</button></td>

            </tr>
        </table>
        <br/><br/>
        {searchByName.map((val, key) => {
            return <div className='grid'>
                <div className='edutable'>
                {val.Name} <br/>
                {val.Profession} <br/>
                <button onClick={(event) => {
                    setTargetEmail(val.Email)
                    localStorage.setItem("targetemail", val.Email);
                    window.location.href = "/viewprofile";
                }} className="buttonpro smallbutton">VIEW PROFILE</button>
                </div>
            </div>
        })}
    </div>
}

export default Connectpeople;