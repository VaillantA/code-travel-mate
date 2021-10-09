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
  const subscribe = useSelector((state) => state.profil.subscribe);

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
    if (logged === true && subscribe === false) {
      dispatch({
        type: 'SUBSCRIPTION',
        eventID: id,
        userID: userID,
      });
    }
    else if (logged === true && subscribe === true) {
      dispatch({
        type: 'UNSUBSCRIBE',
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
  const isClicked = useSelector((state) => state.searchBar.searchbarBurgerOpen);

  const handleClick = () => {
    dispatch({
      type: 'SEARCHBAR_BURGEN_OPEN',
    });
  };

  return (
    <>
      <div className="detail">
        <div className="detail--menu--head">
          <h2 className="menu--title">
            Find your event
          </h2>
          <div className="detail--menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-search'} />
          </div>
          <div className={isClicked ? 'detail--menu actif' : 'detail--menu'}>
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
              <p className="eventDescription--informations--title">Informations complémentaires</p>
              <p className="eventDescription--informations--date">Début de l'événement : <span>{date}</span></p>
              <p className="eventDescription--informations--address">Lieu de l'événement : <span>{eventCity}</span></p>
              <p className="eventDescription--informations--participant">Nombre de participants : <span>{oneEvent.participant}</span></p>
            </div>
          </div>
          <div className="participation">
            <button
              className="participation--button"
              type="button"
              onClick={handleSubscribe}
            >
              {subscribe
                ? 'Annuler'
                : 'Participer !'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
