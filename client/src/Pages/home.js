import React, { useState,useEffect } from "react";
import Axios from 'axios';
import Navbar from '../styles/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
//import '../styles/jobstreet.css';
import axios from "axios";

function Home(props) {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [cookies, setCookie] = useCookies();
    const logout = () => {
        Axios.get('http://localhost:3001/logout');
    }
    const [userDetails, setUserDetails] = useState([]);
    const email = localStorage.getItem("email");

    Axios.post('http://localhost:3001/gethomeuserinfo', {
        email: email
    }).then((response) => {
        setUserDetails(response.data);
    })

    const name = localStorage.getItem("name");
    const quoteAPI = async () => {
        const data = await axios.get("https://api.quotable.io/random");
        let arrayOfQuotes = data.data;
        console.log(arrayOfQuotes);
        setQuote(arrayOfQuotes.content);
        setAuthor(arrayOfQuotes.author);
    }
    useEffect(() => {
        quoteAPI();
    }, []);

    return (
        <div><div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        <CookiesProvider>
        {cookies.email && <p>{cookies.email}</p>}
        </CookiesProvider>
        {userDetails.map((val, key)=> {
            return <div>
                <h3 className="title hometitle">WELCOME {val.Name}</h3>
            </div>
        })}
        <div className="hometitle">{quote} </div><br/>
        <div className="hometitle homesubtitle">--{author}</div>
        </div>
    )
}

export default Home;