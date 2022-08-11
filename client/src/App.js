import './App.css';
import './styles/button.css';
import './styles/login.css';
import './styles/signup.css';
import './styles/team.css';
import './styles/likebutton.css';
import './styles/setup1.css';
import './styles/jobs.css';
import './styles/profile.css';
import './styles/educationinfo.css';
import './styles/searchbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Welcome from "./Pages/welcome";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Home from "./Pages/home";
import SetUp1 from "./Pages/setup1";
import StudentSetUp from "./Pages/studentsetup";
import ProfessionalSetUp from "./Pages/professionalsetup";
//import Navbar from "../styles/Navbar";
import Profile from "./Pages/profile";
import EducationInfo from "./Pages/educationinfo";
import AddCollege from "./Pages/addcollege";
import AddSchool from "./Pages/addschool";
import AddWork from "./Pages/workinfo";
import AddInternships from "./Pages/addinternship";
import Team from "./Pages/team.js";
import AddPost from './Pages/addpostpage';
import LikedPosts from './Pages/likedposts';
import Comment from './Pages/comment';
import AddJob from './Pages/addjob';
import SkillsInfo from "./Pages/skillsinfo";
import AddSkill from "./Pages/addskills";
import Connect from "./Pages/connect";
import Connectpeople from "./Pages/connectpeople";
import ViewProfile from "./Pages/viewprofile";
import Jobs from "./Pages/jobs";
import PostJobs from "./Pages/postjob";
import AddNewJob from "./Pages/addnewjob";
import ViewMyJob from "./Pages/viewmyjob";
import SearchJobs from "./Pages/searchjob";
import ApplyJob from "./Pages/applyjob";
import ViewJobApp from "./Pages/viewjobapp";
import Posts from "./Pages/post";
import CreatePosts from "./Pages/createpost";
import NotFound from "./Pages/notfound";

function App() {
  const [email, setEmail] = useState("");
  const fun= e => {
    setEmail(e.target.value);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login email={email} fun={fun}/>} />
          <Route path="/home" element={<Home email={email}/>} />
          <Route path="/setup1" element={<SetUp1 email={email} />} />
          <Route path="/studentsetup" element={<StudentSetUp />} />
          <Route path="/professionalsetup" element={<ProfessionalSetUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/educationinfo" element={<EducationInfo />} />
          <Route exact path="/addcollege" element={<AddCollege />} />
          <Route exact path="/addschool" element={<AddSchool />} />
          <Route exact path="/workinfo" element={<AddWork />} />
          <Route exact path="/addinternship" element={<AddInternships />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/addpostpage" element={<AddPost />} />
          <Route exact path="/likedposts" element={<LikedPosts />} />
          <Route exact path="/comment" element={<Comment/>} />
          <Route exact path="/addjob" element={<AddJob/>} />
          <Route exact path="/skillsinfo" element={<SkillsInfo />} />
          <Route exact path="/addskills" element={<AddSkill />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/connectpeople" element={<Connectpeople />} />
          <Route exact path="/viewprofile" element={<ViewProfile />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/postjob" element={<PostJobs />} />
          <Route exact path="/addnewjob" element={<AddNewJob />} />
          <Route exact path="/viewmyjob" element={<ViewMyJob />} />
          <Route exact path="/searchjob" element={<SearchJobs />} />
          <Route exact path="/applyjob" element={<ApplyJob />} />
          <Route exact path="/viewjobapp" element={<ViewJobApp />} />
          <Route exact path="/post" element={<Posts />} />
          <Route exact path="/createpost" element={<CreatePosts />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;