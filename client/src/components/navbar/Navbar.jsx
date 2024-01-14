import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';



const Menu = () => (
  <>
    <p><Link to="/home">Home</Link></p>
    <p><Link to="/features">Note Intake</Link></p>

  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="billify__navbar">
      <div className="billify__navbar-links">
        <div className="billify__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="billify__navbar-links_container">
          <p><Link to="/home">Home</Link></p>
          <p><Link to="/features">Note Intake</Link></p>

        </div>
      </div>
      <div className="billify__navbar-sign">
      
        <button type="button">Get Started</button>
      </div>
      <div className="billify__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="billify__navbar-menu_container scale-up-center">
          <Menu />
          <div className="billify__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;