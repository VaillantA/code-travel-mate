import './style.scss';
import { useSelector} from 'react-redux';


const SelectBanniere = ({destination}) => {
  
console.log(destination);
  return (
    <select>
      {destination.map((pays)=>(
      <option key={pays.id}>{pays.country}</option>
    ))}
    </select>
  )
    
};

export default SelectBanniere;
