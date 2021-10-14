import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

const Input = ({ className }) => {
  const cityInProgress = useSelector((state) => state.searchBar.cityInProgress);

  const dispatch = useDispatch();

  const handleChange = (event) => {

    dispatch({
      type: 'CHANGE_MESSAGE',
      city: event.target.value,
    });
  };

  return (
    <input
      name="searchBar--search"
      className={className}
      placeholder="Enter a city"
      onChange={handleChange}
      value={cityInProgress}
    />
  );
};

export default Input;
