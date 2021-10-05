import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import SelectEvent from 'src/components/EventForm/SelectEvent';
import Input from './Input';
import Textarea from './Textarea';

const EventForm = () => {
  useEffect(() => {
    document.title = 'Registration Form';
  }, []);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
    });
  };
  const categories = useSelector((state) => state.searchBar.categoriesList);

  return (
    <div className="container">
      <div className="title"> Event Create Form</div>
      <div className="form">
        <div className="input-field">
          <label>Event title</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter a title"
            aria-label="title"
            inputKey="title"
          />
        </div>
        <div className="input-field">
          <label>City</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter a city"
            aria-label="city"
            inputKey="city"
          />
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
        <div className="input-field">
          <label>Resume</label>
          <Input
            type="text"
            className="input"
            placeholder="Enter a resume"
            aria-label="Resume"
            inputKey="resume"
          />
        </div>
        <SelectEvent
          choice={categories}
        />
        <SelectEvent
          choice={categories}
        />
        <div className="input-field">
          <label>Date</label>
          <Input
            type="datetime-local"
            className="input"
            placeholder="Date"
            aria-label="Date"
            inputKey="date"
          />
        </div>
        <button type="button" className="button" onClick={handleClick}>Create an event</button>
      </div>
    </div>
  );
};

export default EventForm;
