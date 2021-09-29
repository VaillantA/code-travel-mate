/* import "src/components/App/styles.scss"; */
import Card from 'src/components/Card';
import landscape from 'src/assets/images/licensed-image.jpeg';
import { useSelector } from 'react-redux';
import './style.scss';

function Cards() {
  const like = 193;
  const isLiked = true;

  const listEvents = useSelector((state) => state.events.list);
  /* console.log(listEvents); */

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
          {listEvents.slice(0, 3).map((currentEvent) => (
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
          {listEvents.slice(6, 8).map((currentEvent) => (
            <Card
              key={currentEvent.id}
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


// {listEvents.slice(0, 3).map((currentEvent) => (
//   <Card
//     key={currentEvent.id}
//     title={currentEvent.title}
//     resume={currentEvent.resume}
//     date={currentEvent.startAt}
//     image={currentEvent.image}
//     liked={isLiked}
//   />
