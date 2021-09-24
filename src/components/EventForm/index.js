import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import SelectEvent from 'src/components/EventForm/SelectEvent';

const EventForm = () => {
  useEffect(() => {
    document.title = 'Registration Form';
  }, []);

  const categories = useSelector((state) => state.categories);

  return (
    <div className="container">
      <div className="title">
        Event Create Form
      </div>
      <div className="form">
        <div className="input-field">
          <label>Event title</label>
          <input type="text" className="input" />
        </div>
        <div className="input-field">
          <label>Description</label>
          <textarea type="text" className="input"> </textarea>
        </div>
        <div className="input-field">
          <label>Resume</label>
          <input type="text" className="input" />
        </div>
        <SelectEvent
          choice={categories}
        />
        <div className="input-field">
          <label>Date</label>
          <input type="text" className="input" />
        </div>
        <button type="button" className="button">Register</button>
      </div>
    </div>
  );
};

export default EventForm;
