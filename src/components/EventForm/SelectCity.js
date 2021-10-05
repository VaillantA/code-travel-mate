import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const SelectCity = ({ cities }) => {
  const city = useSelector((state) => state.eventForm.selectedCity);

  const dispatch = useDispatch();
  const handleSelect = (event) => {
    dispatch({
      type: 'CHANGE_SELECT_CITY_FORM',
      city: event.target.value,
    });
  };

  return (
    <div className="input-field">
      <label>City</label>
      <div className="gender-select">
        <select
          name="searchBar--category"
          // className="input"
          value={city}
          onChange={handleSelect}
        >
          <option
            value=""
          >
            Choose a city
          </option>
          {cities.map((currentCity) => (
            <option
              type="text"
              value={currentCity.option}
              key={currentCity.id}
              className="searchBar--option"
            >
              {currentCity.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectCity.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default SelectCity;
