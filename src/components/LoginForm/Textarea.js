import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const Textarea = ({ textareaKey, ...props }) => {
  const value = useSelector((state) => state[textareaKey]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE_LOGIN_FORM',
      newValue: event.target.value,
      key: textareaKey,
    });
  };
  return (

    <textarea
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

Textarea.propTypes = {
  textareaKey: PropTypes.string.isRequired,
};

export default Textarea;
