import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Input from 'src/components/Searchbar/Input';
import avatar from 'src/assets/images/avatar.png';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.login.logged);
  const userID = useSelector((state) => state.login.userID);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ONE_EVENT',
      id: id,
    });
  }, []);

  const categories = useSelector((state) => state.searchBar.categoriesList);

  const handleRadio = (e) => {
    dispatch({
      type: 'CHANGE_RADIO',
      category: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch({
      type: 'SEARCH_SELECTED_EVENTS',
    });
  };
  const handleSubscribe = () => {
    if (logged === true) {
      dispatch({
        type: 'SUBSCRIPTION',
        eventID: id,
        userID: userID,
      });
    }
    else {
      alert('You must be logged in to register for an event');
    }
  };

  const oneEvent = useSelector((state) => state.events.oneEvent);
  const authorFirstname = useSelector((state) => state.events.authorFirstname);
  const authorLastname = useSelector((state) => state.events.authorLastname);
  const eventImage = useSelector((state) => state.events.eventImage);
  const eventCity = useSelector((state) => state.events.eventCity);
  const date = new Date(oneEvent.startAt).toLocaleString();

  return (
    <>
      <div className="detail">
        <div className="detail--menu">
          <h2 className="menu--title">
            Find your event
          </h2>
          <Input
            className="menu--input"
          />
          <div className="menu--radio">
            {categories.map((currentCategoryRadio) => (
              <div className="radio--choice" key={currentCategoryRadio.id}>
                <div onClick={handleRadio}>
                  <input
                    name="categories"
                    type="radio"
                    value={currentCategoryRadio.id}
                    id={currentCategoryRadio.id}
                  />
                  <label
                    htmlFor={currentCategoryRadio.id}
                    className="menu--label"
                  >
                    {currentCategoryRadio.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <button
            className="detailmenu--submitButton"
            type="button"
            onClick={handleSubmit}
          >
            GO !
          </button>
        </div>
        <div className="detail--event">
          <div className="event--titleAndAuthor">
            <h2 className="event--title">
              {oneEvent.title}
            </h2>
            <div className="event--avatar">
              <img className="avatar" src={avatar} />
            </div>
            <div className="event--author">
              <p>Author: {authorFirstname} {authorLastname}</p>
            </div>
          </div>
          <div className="eventDescription">
            <img className="eventDescription--picture" src={eventImage} />
            <div className="eventDescription--text">
              <p>{oneEvent.content}</p>
            </div>
            <div className="eventDescription--informations">
              <div className="eventDescription--informations--map">
                //todo map
              </div>
              <div className="eventDescription--informations--date">
                <p>Début de l'événement : {date}</p>
              </div>
              <div className="eventDescription--informations--address">
                <p>Lieu de l'événement : {eventCity}</p>
              </div>
            </div>
          </div>
          <div className="participation">
            <div className="participation--nbParticipants">
              <p>Nombre de participants inscrits : {oneEvent.participant}</p>
            </div>
            <div className="participation--comments">
              <p>Questions et commentaires</p>
            </div>
            <button
              className="participation--button"
              type="button"
              onClick={handleSubscribe}
            >
              Participer !
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
