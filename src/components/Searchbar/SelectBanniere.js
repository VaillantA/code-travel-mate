import './style.scss';
import { useSelector, useDispatch} from 'react-redux';


const SelectBanniere = ({choice}) => {
  const category = useSelector((state) => state.selectedCategory);

  /* const dispatch = useDispatch();
  
  handleSelect = (event) => {
    dispatch({
      type='CHANGE_SELECT',
      category: event.target.value,
    });
  }; */

  return (
    <select
      className="searchBar--select"
      /* value={category}
      onChange={handleSelect} */
    >
      {choice.map((currentChoice)=>(
      <option
        value="{currentChoice.option}"
        key={currentChoice.id}
        className="searchBar--option"
      >
        {currentChoice.option}
      </option>
    ))}
    </select>
  )
};

export default SelectBanniere;
