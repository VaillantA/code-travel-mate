import { useEffect } from 'react';
import './style.scss';

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
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Last Name</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Pseudo</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Confirm Password</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Gender</label>
          <div className="gender-select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="gender-fluid">Gender Fluid</option>
            </select>
          </div>
        </div>
        <div className="input-field">
          <label>Email Adress</label>
          <input type="text" className="input" />
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
