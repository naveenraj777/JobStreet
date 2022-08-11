import Axios from 'axios';
import React, { useState } from "react";

const email = localStorage.getItem("email");
const name = localStorage.getItem("name");

function StudentSetUp(props) {
    const [college, setCollege] = useState("");
    const [course, setCourse] = useState("");
    const [degree, setDegree] = useState("");
    const [grad, setGrad] = useState(0);
    const studentsignup = () => {
        Axios.post('http://localhost:3001/studentsignup', {
            college: college,
            course: course,
            degree: degree,
            grad: grad,
            email: email
        });
        window.location.href = "./home";
    };
    return <div>
        <h2>Welcome {name}</h2>
        <table align = "center">
            <tr>
                <td><label>College currently enrolled: </label></td>
                <td><input type="text" placeholder="COLLEGE" 
                onChange={(event) => {
                    setCollege(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>Course currently pursuing: </label></td>
                <td><input type="text" placeholder="COURSE" 
                onChange={(event) => {
                    setCourse(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>Degree currently pursuing: </label></td>
                <td><input type="text" placeholder="DEGREE" 
                onChange={(event) => {
                    setDegree(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td><label>Expected year of graduation: </label></td>
                <td><input type="number" placeholder="YEAR" 
                onChange={(event) => {
                    setGrad(event.target.value);
                }}/></td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={studentsignup}>NEXT</button></td>
            </tr>
        </table>
    </div>
}

export default StudentSetUp;