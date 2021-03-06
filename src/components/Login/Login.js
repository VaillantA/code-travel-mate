import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import './style.scss';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  /* const isOpen = useSelector((state) => state.login.loginOpen); */
  const logged = useSelector((state) => state.login.logged);

  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    if (logged === true) {
      dispatch({
        type: 'LOGOUT',
      });
    }
    else {
      dispatch({
        type: 'LOGIN',
      });
    }
  };
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   dispatch({
  //     type: 'LOGIN',
  //   });
  // };

  return (
    <div className="container">
      <div className="title">
        Log In
      </div>
      <form className="form">
        <div className="input-field">
          <label>Email Adress</label>
          <Input
            type="email"
            aria-label="Email"
            placeholder="Enter your email adress"
            className="input"
            inputKey="email"
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <Input
            type="password"
            aria-label="Password"
            placeholder="Enter your password"
            className="input"
            inputKey="password"
          />
        </div>
        <button type="submit" className="button" onClick={handleClick}>Log In</button>
      </form>
    </div>
  );
};
export default Login;
