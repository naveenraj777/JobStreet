import React from 'react';
import './navbar.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  

 const Navbar = () => {
   
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  
  return (
    <>
      <Nav className='nav'>
        <Bars />
  
        <NavMenu> 
          <NavLink className='nav-links' to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink className='nav-links' to='/jobs' activeStyle>
            Jobs
          </NavLink>
          <NavLink className='nav-links' to='/annual' activeStyle>
            Messages
          </NavLink>
          <NavLink className='nav-links' to='/team' activeStyle>
            Posts
          </NavLink>
          <NavLink className='nav-links' to='/connect' activeStyle>
            Connect
          </NavLink>
          <NavLink className='nav-links' to='/profile' activeStyle>
            Profile
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <button  class='buttonpro' onClick={logout}>LOGOUT</button>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;