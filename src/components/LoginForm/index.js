import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';
import Input from './Input';
import Textarea from './Textarea';

const LoginForm = () => {
  useEffect(() => {
    document.title = 'Registration Form';
  }, []);
  const value = useSelector((state) => state.register.selectValue);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_SELECTED',
      value: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    console.log('COucou petite péruche');
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
    });
  };

  return (
    <div className="container">
      <div className="title">
        Registration Form
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>First Name</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter your first name"
            aria-label="Firstname"
            inputKey="firstname"
          />
        </div>
        <div className="input-field">
          <label>Last Name</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter your last name"
            aria-label="Lastname"
            inputKey="lastname"
          />
        </div>
        {/* <div className="input-field">
          <label>Age</label>
          <Input
            type="text"
            min="0"
            max="100"
            className="input"
            placeholder="Enter your age"
            aria-label="age"
            inputKey="age"
          />
        </div> */}
        <div className="input-field">
          <label>Pseudo</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter your pseudo"
            aria-label="Pseudo"
            inputKey="pseudo"
          />
        </div>
        <div className="input-field">
          <label>Email Adress</label>
          <Input
            type="email"
            className="input"
            placeholder="Enter your email"
            aria-label="email"
            inputKey="email"
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <Input
            type="password"
            className="input"
            placeholder="Enter your password"
            aria-label="Password"
            inputKey="userPassword"
          />
        </div>
        <div className="input-field">
          <label>Confirm Password</label>
          <Input
            type="password"
            className="input"
            placeholder="Enter your password again"
            aria-label="password"
            inputKey="password"
          />
        </div>
        <div className="input-field">
          <label>Gender</label>
          <div className="gender-select">
            <select value={value} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="input-field">
          <label>Description</label>
          <Textarea
            type="text"
            className="input"
            placeholder="Enter a description"
            aria-label="Description"
            textareaKey="description"
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default LoginForm;
