import { useEffect } from 'react';
import './style.scss';
import Input from './Input';

const LoginForm = () => {
  useEffect(() => {
    document.title = 'Registration Form';
  }, []);

  return (
    <div className="container">
      <div className="title">
        Registration Form
      </div>
      <div className="form">
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
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="input-field">
          <label>Description</label>
          <textarea type="text" className="input"> </textarea>
        </div>
        <button type="button" className="button">Register</button>
      </div>
    </div>
  );
};

export default LoginForm;
