import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const Input = ({ inputKey, ...props }) => {
  const value = useSelector((state) => state[inputKey]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE_LOGIN_FORM',
      newValue: event.target.value,
      key: inputKey,
    });
  };
  return (

    <input
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

Input.propTypes = {
  inputKey: PropTypes.string.isRequired,
};

export default Input;
