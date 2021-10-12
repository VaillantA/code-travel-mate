import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Input from 'src/components/Searchbar/Input';
import avatar from 'src/assets/images/avatar.png';
import panorama from 'src/assets/Image/panorama.jpg';
import swal from 'sweetalert';

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.login.logged);
  const userId = useSelector((state) => state.login.userId);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ONE_EVENT',
      id: id,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CATEGORIES',
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_EVENTS',
      userId: userId,
    });
  }, []);

  const categories = useSelector((state) => state.searchBar.categoriesList);
  const subscribe = useSelector((state) => state.profil.subscribe);
  // const eventsList = useSelector((state) => state.profil.eventsList);
  // console.log(eventsList);
  // console.log(eventsList[0].id);
  // const isThisEventSubscribe = eventsList.filter((event) => event.id === id);

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
        userId: userId,
      });
    }
    else if (logged === true && subscribe === true) {
      dispatch({
        type: 'UNSUBSCRIBE',
        eventID: id,
        userId: userId,
      });
      swal({
        title: 'Bye bye!',
        text: 'You have been unsubscribed from the event',
        icon: 'info',
      });
    }
    else {
      swal({
        title: 'Warning',
        text: 'You must be logged in to register',
        icon: 'warning',
      });
    }
  };

  const oneEvent = useSelector((state) => state.events.oneEvent);
  const authorFirstname = useSelector((state) => state.events.authorFirstname);
  const authorLastname = useSelector((state) => state.events.authorLastname);
  const authorAge = useSelector((state) => state.events.authorAge);
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
          <div className="event--titleAndAuthor" style={{ backgroundImage: `url(${panorama})` }}>
            <h2 className="event--title">
              {oneEvent.title}
            </h2>
            <div className="event--avatar">
              <img className="avatar" src={avatar} alt="" />
            </div>
            <div className="event--author">
              <p>Author: <span>{authorFirstname} {authorLastname} {authorAge}</span></p>
            </div>
          </div>
          <hr />
          <div className="eventDescription">
            <img className="eventDescription--picture" src={eventImage} alt="" />
            <div className="eventDescription--text">
              <p className="eventDescription--text--title">What's going to happen ?</p>
              <p>{oneEvent.content}</p>
            </div>
            <div className="eventDescription--informations">
              <p className="eventDescription--informations--title">Additional informations</p>
              <p className="eventDescription--informations--date">Start of the event : <span>{date}</span></p>
              <p className="eventDescription--informations--address">Location : <span>{eventCity}</span></p>
              <p className="eventDescription--informations--participant">Number of participants : <span>{oneEvent.participant}</span></p>
            </div>
          </div>
          <div className="participation">
            <button
              className="participation--button"
              type="button"
              onClick={handleSubscribe}
            >
              {subscribe
                ? 'Unsubscribe'
                : 'Suscribe !'}
            </button>
          </div>
          {subscribe && (
          <div className="participation--message">
            <p>
              You are registered for this event ! See you soon
            </p>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventDetail;
