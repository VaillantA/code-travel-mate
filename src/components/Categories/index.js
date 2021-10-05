/* eslint-disable max-len */
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';
import './style.scss';

const Categories = () => {
  const like = 193;
  const isLiked = true;

  const categories = useSelector((state) => (state.searchBar.categoriesList));
  const listEvents = useSelector((state) => state.events.list);

  return (
    <main>
      <div className="cards">
        {categories.map((currentCategory) => (

          <div className="category">
            <div className="event">
              <a href="#">
                <h1 className="event-tittle">
                  {currentCategory.name}
                </h1>
              </a>
            </div>
            <div className="card--parent">
              {listEvents.slice(0, 12).filter((event) => event.categories[0].name === (currentCategory.name)).slice(0, 3).map((currentEvent) => (
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
        ))}
      </div>
    </main>
  );
};

export default Categories;
