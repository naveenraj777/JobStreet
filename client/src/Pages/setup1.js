import Axios from 'axios';
import React, { useState } from "react";
import student from "../images/student.png";
import prof from "../images/prof.png";

const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

function SetUp1(props) {
    const[selectedRadioBtn, setSelectedRadioBtn] = useState("");
    const[imgBool, setimgBool] = useState(false);
    const jobsignup = () => {
        Axios.post('http://localhost:3001/jobsignup', {
            email: email,
            job: selectedRadioBtn
        })
        if(selectedRadioBtn=="student") {
            window.location.href="/studentsetup";
        }
        if(selectedRadioBtn=="professional") {
            window.location.href="/professionalsetup";
        }
        
    
    }
   const setBool = ()=>{
    if(selectedRadioBtn=="student") {
        setimgBool(true);
    }
    if(selectedRadioBtn=="professional") {
        setimgBool(false);
    }
   }

    return <div><h2 className='title'>
        Welcome {name}</h2>
        <h3 className='logintitle'>ARE YOU A STUDENT OR PROFESSIONAL?</h3>
        <table align="center">
            <tr>
        <td><input style={{width:"25px",height:"25px"}} type="radio" name="profession" id="student" value="student"
        onChecked = {(event) => {
            setSelectedRadioBtn(event.target.value);
        }} onChange = {(event) => {
            setSelectedRadioBtn(event.target.value);
            setBool();
        }} /></td>
        <td><label className='title1' htmlFor="student">STUDENT</label></td>
        </tr>
        <br/>
        <tr><td><input style={{width:"25px",height:"25px"}} type="radio" name="profession" id="professional" value="professional"
        onChecked = {(event) => {
            setSelectedRadioBtn(event.target.value);
        }} onChange = {(event) => {
            setSelectedRadioBtn(event.target.value);
            setBool();
        }} /></td>
        <td><label className='title1' htmlFor="professional">PROFESSIONAL</label></td></tr>
        <br/>
        <tr>
            <td colSpan={2}>
                <button className='buttonpro' onClick={jobsignup}>NEXT</button>
            </td>
        </tr>
        </table>
        <div>{imgBool ?  <img className="setupimg" src={prof} alt="Logo" />: <img className="setupimg" src={student} alt="Logo" />}</div>
    </div>
}

export default SetUp1;