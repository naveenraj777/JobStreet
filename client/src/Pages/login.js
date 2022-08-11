import React, { useState } from "react";
import Axios from 'axios';
import Home from "./home";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


var flag=0;

function Login(props) {
    function preventBack() {
        window.history.forward();
    }
    setTimeout(preventBack(), 0);
    window.onunload = preventBack();
    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userlist, setUserlist] = useState([]);
    const [loginstatus, setloginStatus] = useState("");

    const loginUser = () => {
        Axios.post('http://localhost:3001/loginuser', {
            email: props.email,
            password: password
        }).then((response) => {
            const obj=Object.values(response.data);
            if(obj.length==1) {
                console.log(obj);
                localStorage.setItem("name", obj[0].Name);
                localStorage.setItem("email", props.email);
                setloginStatus("Login Successful");
                window.location.href = "./home";
            }
            else {
                setloginStatus("Login Failure");
                window.alert("Login Failure!")
            }
            //const arr = Object.values(obj[0]);
            //setUserlist(response.data);
        });
    };
function onchange(value){
    console.log("Captcha value: ",value);
}
    return <div>
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
        
    <table class='form' align="center">
    <h3 class='logintitle'>LOGIN</h3>
            <tr class='flex'>
                <td><label>Email: </label></td>
                <td><input  class='form__field' type="text" placeholder="EMAIL" 
                onChange={props.fun}/></td>
            </tr>
            <tr class='flex'>
                <td><label>Password: </label></td>
                <td><input  class='form__field' type="password" placeholder="PASSWORD"
                onChange={(event) => {
                    setPassword(event.target.value);
                }} /></td>
            </tr>
            <tr>
                <td></td>
                <td ><ReCAPTCHA sitekey="6LcXo1EgAAAAAOy5pNCuWS9l-p0B5ZjIMiSTO3TX" onChange={onchange}/></td>
            </tr>
            <tr>
                <td colSpan="2"><button style={{width:"6em"}} class='button-73' onClick={loginUser}>LOGIN</button></td>
            </tr>
        </table>
        <div>
            {/* {loginstatus} */}
      </div>
    </div>
}

export default Login;