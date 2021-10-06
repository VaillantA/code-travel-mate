/* eslint-disable max-len */
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';
import './style.scss';

function Cards() {
  const like = 193;
  const isLiked = true;

  const listEvents = useSelector((state) => state.events.list);

  listEvents.sort((a, b) => (new Date(a.startAt) - new Date(b.startAt)));
  
  return (
    <div className="slider">
      <div className="cards">
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              Les plus populaires
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
              liked={isLiked}
            />
          ))}
        </div>
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              Les prochains événements
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
              liked={isLiked}
            />
          ))}
        </div>
        <div className="event">
          <a href="#">
            <h1 className="event-tittle">
              Proches de vous
            </h1>
          </a>
        </div>
        <div className="card--parent">
          {listEvents.slice(3, 6).map((currentEvent) => (
            <Card
              key={currentEvent.id}
              id={currentEvent.id}
              title={currentEvent.title}
              resume={currentEvent.resume}
              date={currentEvent.startAt}
              image={currentEvent.categories[0].image}
              liked={isLiked}
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default Cards;
