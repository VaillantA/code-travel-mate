import React, { useState } from 'react';
import './style.scss';
import landscape from 'src/assets/images/licensed-image.jpeg';
import avatar from 'src/assets/images/avatar.png';
// import Ripples from 'react-ripples';
import { Heart, MessageCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* import { NavLink } from "react-router-dom"; */

/* import { createRipples } from 'react-ripples'; */

const Card = ({
  title,
  date,
  image,
  resume,
}) => (
  <div className="card">
    <div className="card-header">
      <div className="profile">
        <a href="#" alt="avatar">
          <img className="avatar" src={avatar} />
        </a>
      </div>
      <div className="card-title-group">
        <Link to="/detailsEvent">
          <h5 className="card-title">{title}</h5>
        </Link>
        <div className="card-date">{date}</div>
      </div>
    </div>
    <div>
      <Link to="/detailsEvent" alt="card-image">
        <img className="card-image" src={image} alt="Logo" />
      </Link>
      <div className="card-like">
        <Heart className=" card-like-icon" />
        <MessageCircle className=" card-like-icon" />
      </div>
      <div className="card-text">{resume}</div>
      <div className="divButton">
        {/* <Ripples color="#fff" during={1200}> */}
        <button type="button" className="buttons-ripples">View Details</button>
        {/* </Ripples> */}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Card;
