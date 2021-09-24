import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

const SelectEvent = ({ choice }) => {
  const category = useSelector((state) => state.selectedCategory);

  const dispatch = useDispatch();

  const handleSelect = (event) => {
    console.log(event.target.value);
    dispatch({
      type: 'CHANGE_SELECT',
      category: event.target.value,
    });
  };

  return (
    <div className="input-field">
      <label>Category</label>
      <div className="gender-select">
        <select
          name="searchBar--category"
          className="coucou"
          value={category}
          onChange={handleSelect}
        >
          {choice.map((currentChoice) => (
            <option
              value={currentChoice.option}
              key={currentChoice.id}
              className="searchBar--option"
            >
              {currentChoice.option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectEvent;
