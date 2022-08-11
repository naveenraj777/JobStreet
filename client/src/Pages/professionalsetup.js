import Axios from 'axios';
import React, { useState } from "react";

const email = localStorage.getItem("email");
const name = localStorage.getItem("name");

function ProfessionalSetUp(props) {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [domain, setDomain] = useState("");
    const professionalsignup = () => {
        Axios.post('http://localhost:3001/professionalsignup', {
            company: company,
            position: position,
            email: email,
            domain: domain
        })
        window.location.href = "./home";
    };
    return <div>
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    
        
        <table className="form" align="center">
        <tr className='flex'>
                <td colSpan={2}> <h3 style={{fontSize:"5vh"}} class='jobstreet'>Welcome {name}</h3></td>
            </tr>
       
            <tr className='flex'>
                <td><label>Company: </label></td>
                <td><input className='form__field' type="text" placeholder="COMPANY" 
                onChange={(event) => {
                    setCompany(event.target.value);
                }}/></td>
            </tr>
            <br/>
            <tr className='flex'>
                <td><label>Position: </label></td>
                <td><input className='form__field' type="text" placeholder="POSITION" 
                onChange={(event) => {
                    setPosition(event.target.value);
                }}/></td>
            </tr>
            <br/>
            <tr  className='flex'>
                <td><label>Domain: </label></td>
                <td><input className='form__field' type="text" placeholder="DOMAIN" 
                onChange={(event) => {
                    setDomain(event.target.value);
                }}/></td>
            </tr>
            <br/>
            <tr>
                <td colSpan={2}><button  style={{width:"6em"}} class='button-73' onClick={professionalsignup}>DONE</button></td>
            </tr>
        </table>
    </div>
}

export default ProfessionalSetUp;