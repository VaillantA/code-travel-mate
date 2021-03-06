import './style.scss';
import avatar from 'src/assets/images/avatar.png';
// import Ripples from 'react-ripples';
import { Heart, MessageCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        >
          <img className="card-image" src={image} alt="Logo" />
        </Link>
        <div className="card-like">
          <Heart className=" card-like-icon" />
          <MessageCircle className=" card-like-icon" />
        </div>
        <div className="card-text">{resume}</div>
        <div className="divButton">
          <Link
            to={`/detailsEvent/${id}`}
          >
            <button type="button" className="buttons-ripples">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
