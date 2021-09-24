import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

const SelectBanniere = ({ choice }) => {
  const category = useSelector((state) => state.selectedCategory);

  const dispatch = useDispatch();

  const handleSelect = (event) => {
    console.log(event.target.value);
    dispatch({
      type: 'CHANGE_SELECT',
      category: event.target.value,
    });
  };

const SelectBanniere = ({choice}) => {
    
  return (
    <select
      name="searchBar--category"
      className="searchBar--select"
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
  );
};

export default SelectBanniere;
