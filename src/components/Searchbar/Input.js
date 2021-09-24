import './style.scss';
import { useSelector, useDispatch } from 'react-redux';


const Input = ({className}) => {
  const cityInProgress = useSelector((state) => state.cityInProgress);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    /* console.log('message ok'); */
    dispatch({
      type: 'CHANGE_MESSAGE',
      city: event.target.value,
    });
  };

  return (
    <input
      className={className}
      placeholder='Ville'
      onChange={handleChange}
      value={cityInProgress}
    >
    </input>
  )
};
  
export default Input;
  