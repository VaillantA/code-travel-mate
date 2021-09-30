// import PropTypes from 'prop-types';
import React from 'react';
// import { Button } from 'src/components/NavBar/Button/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Home from 'src/components/Home';


import './style.scss';

const NavBar = () => {
  const isClicked = useSelector((state) => state.searchBar.burgerOpen);
  const isOpen = useSelector((state) => state.login.loginOpen);


  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGEN_OPEN',
    });
  };
  const handleClickToggle = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travel Mate <i className="fas fa-globe-africa" /></h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink className="nav-links" to="/home" exact>Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/events">Event</NavLink>
        </li>

        <li>
          <NavLink className="nav-links" to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/about-us">About Us</NavLink>
        </li>
        <li>
          <Link className="nav-links" to="" onClick={handleClickToggle}>Log In</Link>
        </li>
        <li>
          <NavLink className="nav-links" to="/registration">Sign Up</NavLink>
        </li>
      </ul>
      {/* <Button>Sign Up</Button> */}
    </nav>
  );
};

export default NavBar;
