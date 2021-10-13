import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const SelectEvent = ({ choice }) => {
  const category = useSelector((state) => state.eventForm.selectedCategory);

  const dispatch = useDispatch();

  const handleSelect = (event) => {
    dispatch({
      type: 'CHANGE_SELECT_EVENT_FORM',
      category: event.target.value,
    });
  };

  return (
    <div className="input-field">
      <label>Category</label>
      <div className="gender-select">
        <select
          name="searchBar--category"
          className=""
          value={category}
          onChange={handleSelect}
          // multiple
        >
          <option
            value=""
          >
            Choose a category
          </option>
          {choice.map((currentChoice) => (
            <option
              type="text"
              value={currentChoice.id}
              key={currentChoice.id}
              className="searchBar--option"
            >
              {currentChoice.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectEvent.propTypes = {
  choice: PropTypes.array.isRequired,
};

export default SelectEvent;
