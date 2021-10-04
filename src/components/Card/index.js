import './style.scss';
import avatar from 'src/assets/images/avatar.png';
// import Ripples from 'react-ripples';
import { Heart, MessageCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* import { NavLink } from "react-router-dom"; */

/* import { createRipples } from 'react-ripples'; */

const Card = ({
  id,
  title,
  resume,
  date,
  image,
}) => {
  const eventDate = new Date(date).toLocaleString();

  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <a href="#" alt="avatar">
            <img className="avatar" src={avatar} />
          </a>
        </div>
        <div className="card-title-group">
          <Link
            key={id}
            to={`/detailsEvent/${id}`}
            /* title={`${title}`} */
            exact
          >
            <h5 className="card-title">{title}</h5>
          </Link>
          <div className="card-date">
            {eventDate}
          </div>
        </div>
      </div>
      <div>
        <Link
          to={`/detailsEvent/${id}`}
          alt="card-image"
          exact
        >
          {/* <img className="card-image" src={image} alt="Logo" /> */}
        </Link>
        <div className="card-like">
          <Heart className=" card-like-icon" />
          <MessageCircle className=" card-like-icon" />
        </div>
        <div className="card-text">{resume}</div>
        <div className="divButton">
          {/* <Ripples color="#fff" during={1200}> */}
          <Link
            to={`/detailsEvent/${id}`}
            exact
          >
            <button type="button" className="buttons-ripples">View Details</button>
          </Link>
          {/* </Ripples> */}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
