import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const SelectBanniere = ({ choice }) => {
  const category = useSelector((state) => state.searchBar.selectedCategory);

  const dispatch = useDispatch();

  const handleSelect = (event) => {
    dispatch({
      type: 'CHANGE_SELECT',
      category: event.target.value,
    });
  };

  return (
    <select
      name="searchBar--category"
      className="searchBar--select"
      // value={category}
      onChange={handleSelect}
    >
      <option
        value=""
      >
        Choose a category
      </option>
      {choice.map((currentChoice) => (
        <option
          value={currentChoice.id}
          key={currentChoice.id}
          className="searchBar--option"
        >
          {currentChoice.name}
        </option>
      ))}
    </select>
  );
};

SelectBanniere.propTypes = {
  choice: PropTypes.array.isRequired,
};

export default SelectBanniere;
