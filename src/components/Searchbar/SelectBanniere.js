import './style.scss';
import { useSelector} from 'react-redux';


const SelectBanniere = ({choice}) => {
    
  return (
    <select className="searchBar--select">
      {choice.map((currentChoice)=>(
      <option
        value="{currentChoice.option}"
        key={currentChoice.id}         className="searchBar--option"
      >
        {currentChoice.option}
      </option>
    ))}
    </select>
  )
};

export default SelectBanniere;
