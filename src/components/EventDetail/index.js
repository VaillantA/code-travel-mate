import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'src/components/Searchbar/Input';
import landscape from 'src/assets/images/licensed-image.jpeg';
import avatar from 'src/assets/images/avatar.png';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  function findEvent(eventsList, searchedID) {
    const event = eventsList.find((testedEvent) => testedEvent.id === searchedID);
    return event;
  }
  const searchedEvent = useSelector((state) => findEvent(state.events.list, id));
  const categories = useSelector((state) => state.searchBar.categoriesList);

  const dispatch = useDispatch();
  const handleRadio = (event) => {
    /* console.log('submit form OK'); */
    dispatch({
      type: 'CHANGE_RADIO',
      category: event.target.value,
    });
  };
  /* console.log(title); */

  return (
    <>
      {/* <Searchbar /> */}
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
                    value={currentCategoryRadio.name}
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
            /* onClick={handleSubmit} */
          >
            GO !
          </button>
        </div>
        <div className="detail--event">
          <div className="event--titleAndAuthor">
            <h2 className="event--title">
              {searchedEvent.title}
            </h2>
            <div className="event--avatar">
              <img className="avatar" src={avatar} />
            </div>
            <div className="event--author">
              <p>Author: name, firstName, age</p>
            </div>
          </div>
          <div className="eventDescription">
            <img className="eventDescription--picture" src={landscape} />
            <div className="eventDescription--text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="eventDescription--informations">
              <div className="eventDescription--informations--map">
                //todo map
              </div>
              <div className="eventDescription--informations--date">
                <p>Date et heure</p>
              </div>
              <div clasName="eventDescription--informations--address">
                <p>Adresse</p>
              </div>
            </div>
          </div>
          <div className="participation">
            <div className="participation--nbParticipants">
              <p>Nombre de participants inscrits</p>
            </div>
            <div className="participation--comments">
              <p>Questions et commentaires</p>
            </div>
            <button
              className="participation--button"
              type="button"
            >
              Participer !
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/* EventDetail.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
}; */

export default EventDetail;
