import React, { useState } from 'react';
import './style.scss';
import landscape from 'src/assets/images/licensed-image.jpeg';
import avatar from 'src/assets/images/avatar.png';
// import Ripples from 'react-ripples';
import { Heart, MessageCircle } from 'react-feather';
import { Link } from 'react-router-dom';


/* import { NavLink } from "react-router-dom"; */

/* import { createRipples } from 'react-ripples'; */

//  import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card">
    <div className="card-header">
      <div className="profile">
        <a href="#" alt="avatar">
          <img className="avatar" src={avatar} />
        </a>
      </div>
      <div className="card-title-group">
        <Link to="/detailsEvent" exact={true}>
          <h5 className="card-title">{props.title}</h5>
        </Link>
        <div className="card-date">{props.date}</div>
      </div>
    </div>
    <div>
      <Link to="/detailsEvent" exact={true} alt="card-image">
        <img className="card-image" src={landscape} alt="Logo" />
      </Link>
      <div className="card-like">
        <Heart className=" card-like-icon" />
        <MessageCircle className=" card-like-icon" />
      </div>
      <div className="card-text">{props.description}</div>
      <div className="divButton">
        {/* <Ripples color="#fff" during={1200}> */}
          <button type="button" className="buttons-ripples">View Details</button>
        {/* </Ripples> */}
      </div>
    </div>
  </div>
);

//  Card.propTypes = {

//  };

export default Card;
