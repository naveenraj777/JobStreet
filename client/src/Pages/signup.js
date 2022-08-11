import '../App.css';
import React, { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
//import { ToastProvider, useToasts } from 'react-toast-notifications';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
    const { addToast } = toast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setNumber] = useState(0);
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [signinstatus, setsigninstatus] = useState("");

    const addUser = () => {
        let flag = 0;

        if(password != password2){
            setsigninstatus("Password mismatch! Login failed!!!");
            flag = 1;
            toast("Password mismatch!");
        }
        else{
            toast('Successfully logged in!', { appearance: 'success' });
        }
        if(flag == 0){
            Axios.post('http://localhost:3001/signupuser', {
                name: name,
                email: email,
                mobile: mobile,
                password: password
            }).then((response) => {
                if(response.data == "Error"){
                    flag = 1;
                    setsigninstatus("Email ID already exists!");
                }
                else{
                    localStorage.setItem("name",name);
                    localStorage.setItem("email",email);
                    window.location.href = "./setup1";
                    console.log("Success");
                }
            });
        }
        
    };
    function onchange(value){
        console.log("Captcha value: ",value);
    }
    return <div>
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
        <div class='form'>
            <h1 class='logintitle'>SIGN UP</h1>
            <table className = "signuptab" align="center" >
            <tr>
                <td>
            Name
            </td>
            
            <td>
                :<input class="form__field" type="text" 
            onChange={(event) => {
                setName(event.target.value);
            }} placeholder="NAME"/>
            </td>
            </tr>
            <tr>
                <td>
          E-Mail ID
            </td>
            
            <td>:<input class='form__field' type="text"
            onChange={(event) => {
                setEmail(event.target.value);
            }} placeholder="EMAIL"/>
            </td>
            </tr>
            <tr>
                <td>
            Mobile number
            </td>
            
            <td>:<input class='form__field' type="text" 
            onChange={(event) => {
                setNumber(event.target.value)
            }} placeholder="MOBILE"/></td>
            </tr>
            <tr>
                <td>
            Password 
            </td>
            
            <td>
                :<input class='form__field' type="password" 
            onChange={(event) => {
                setPassword(event.target.value)
            }} placeholder="PASSWORD"/>
            </td>
            </tr>
            <tr>
                <td>
            Confirm Password</td>
            
            <td>
               :<input class='form__field'  type="password"
                 onChange={(event) => {
                    setPassword2(event.target.value)
                }} placeholder="PASSWORD"/>
                </td>
            </tr>
           <br/>
           <tr>
               <td></td>
                <td ><ReCAPTCHA sitekey="6LcXo1EgAAAAAOy5pNCuWS9l-p0B5ZjIMiSTO3TX" onChange={onchange}/></td>
            </tr>
            <br/>
            <tr>
                <td colSpan="2"><button class='button-73' onClick={addUser}>SIGNUP</button></td>
            </tr>
            </table>
            {signinstatus}
        </div>
    </div>
}

export default Signup;