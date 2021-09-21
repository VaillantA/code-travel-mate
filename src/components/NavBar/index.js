// import PropTypes from 'prop-types';
import React from "react";
import { Button } from 'src/components/NavBar/Button/index.js';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

const NavBar = () => {
  const isClicked = useSelector((state)=> state.burgerOpen); 

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGEN_OPEN',
    });
  };

    return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Travel Mate <i className="fas fa-globe-africa"></i></h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <a className="nav-links" href="">Home</a>
              </li>
              <li>
                <a className="nav-links" href="">Event</a>
              </li>
              <li>
                <a className="nav-links" href="">Categories</a>
              </li>
              <li>
                <a className="nav-links" href="">About Us</a>
              </li>
              <li>
                <a className="nav-links-mobile" href="">Sign Up</a>
              </li>
          </ul>
          <Button>Sign Up</Button>
        </nav>
    );
};


export default NavBar;

