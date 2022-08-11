import React, { useState } from "react";
import Axios from 'axios';
//import '../styles/jobstreet.css';
import '../styles/verticalmenu.css';
import '../styles/profile.css';
import '../styles/signup.css';
import '../styles/button.css';
import Navbar from '../styles/Navbar';

function Profile(props) {
    const email = localStorage.getItem("email");
    const [profileInfo, setProfileInfo] = useState([]);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState(0);
    const [password, setPassword] = useState("");
    Axios.post('http://localhost:3001/profileinfo', {
        email: email
    }).then((response) => {
        setProfileInfo(response.data);
    });
    const updateProfile = () => {
        Axios.post('http://localhost:3001/updateuserinfo', {
            email: email,
            name: name,
            mobile: mobile,
            password: password
        })
    };

    
    const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await Axios.post(
            "http://localhost:3001/upload",
            formData,
            email
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };





    return <div>
        <div className="jobstreet">JOBSTREET</div>
        <br/>
        <Navbar />
        {profileInfo.map ((val, key) => {
            return (
                <div>
                    <div class="vertical-menu">
                        <a href="/profile">PERSONAL</a>
                        <a href="/educationinfo">EDUCATION</a>
                        <a href="/workinfo">WORK</a>
                        <a href="/skillsinfo">SKILLS</a>
                    </div>
                    <br/>
                    <div class="formpro"><h3 className="title">PERSONAL INFORMATION</h3>
                    <table align="center">
                        <tr>
                            <td><label className="labelpro">Name: </label></td>
                            <td><input class="form-control" type="text" placeholder={val.Name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}/></td>
                        </tr>
                        <tr>
                            <td><label className="labelpro">Email: </label></td>
                            <td><input class="form-control" type="text" placeholder={val.Email} disabled /></td>
                        </tr>
                        <tr>
                            <td><label className="labelpro">Mobile: </label></td>
                            <td><input class="form-control" type="number" placeholder={val.Mobile} 
                            onChange={(event) => {
                                setMobile(event.target.value);
                            }}/></td>
                        </tr>
                        <tr>
                            <td><label className="labelpro">Password: </label></td>
                            <td><input class="form-control" type="password" placeholder={val.Password} 
                            onChange = {(event) => {
                                setPassword(event.target.value);
                            }}/></td>
                        </tr>
                        <tr>
                            <td><label className="labelpro">Currently a : </label></td>
                            <td><input class="form-control" type="text" placeholder={val.Profession} disabled /></td>
                        </tr>
                       {/*  <tr colsplan="2">
            <td></td><td>
          <input class='form__field' type="file" name="image" onChange={saveFile} /></td></tr>
          
              <tr colsplan="2">
                  <td></td>
              <td>
          <button onClick={uploadFile}>Upload</button>
             </td></tr>*/}
                        <tr>
                            <td colSpan={2}><button className="buttonpro" onClick={updateProfile}>UPDATE</button></td>
                        </tr> 
                    </table></div>
                </div>
            );
        })}
    </div>
}

export default Profile;