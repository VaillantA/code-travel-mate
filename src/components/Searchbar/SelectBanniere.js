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
      categoryID: event.target.key,
    });
  };

  return (
    <select
      name="searchBar--category"
      className="searchBar--select"
      value={category}
      onChange={handleSelect}
    >
      <option
        value=""
      >
        Choisissez une catégorie
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
