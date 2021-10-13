/* eslint-disable max-len */
import Card from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './style.scss';

function Cards() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_EVENTS',
  //   });
  // }, []);

  const listEvents = useSelector((state) => state.events.list);
  return (
    <div className="slider">
      <div className="cards">
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              The most popular
            </h1>
          </a>
        </div>
        <div className="card--parent">
          {(listEvents.sort((a, b) => b.participant - a.participant)).slice(0, 3).map((currentEvent) => (
            <Card
              key={currentEvent.id}
              id={currentEvent.id}
              title={currentEvent.title}
              resume={currentEvent.resume}
              date={currentEvent.startAt}
              image={currentEvent.categories[0].image}
            />
          ))}
        </div>
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              Next events
            </h1>
          </a>
        </div>
        <div className="card--parent">
          {(listEvents.sort((a, b) => (new Date(a.startAt) - new Date(b.startAt)))).slice(6, 9).map((currentEvent) => (
            <Card
              key={currentEvent.id}
              id={currentEvent.id}
              title={currentEvent.title}
              resume={currentEvent.resume}
              date={currentEvent.startAt}
              image={currentEvent.categories[0].image}
            />
          ))}
        </div>
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              Close to you 
            </h1>
          </a>
        </div>
        <div className="card--parent">
          {listEvents.slice(6, 9).map((currentEvent) => (
            <Card
              key={currentEvent.id}
              id={currentEvent.id}
              title={currentEvent.title}
              resume={currentEvent.resume}
              date={currentEvent.startAt}
              image={currentEvent.categories[0].image}
              // liked={isLiked}
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default Cards;
