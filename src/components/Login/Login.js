import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import './style.scss';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    console.log('COucou petite péruche');
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };
  return (
    <div className="container">
      <div className="title">
        Log In
      </div>
      <div className="form">
        <div className="input-field">
          <label>Email Adress</label>
          <Input
            type="email"
            aria-label="Email"
            placeholder="Enter your email adress"
            className="input"
            inputKey="userEmail"
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <Input
            type="password"
            aria-label="Password"
            placeholder="Enter your password"
            className="input"
            inputKey="userPassword"
          />
        </div>
        <button type="button" className="button" onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
};

export default Login;
