/* eslint-disable max-len */
import Card from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import { useEffect } from 'react';

const Categories = () => {
  const like = 193;
  const isLiked = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_CATEGORIES',
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS',
    });
  }, []);

  const categories = useSelector((state) => (state.searchBar.categoriesList));
  const listEvents = useSelector((state) => state.events.list);

  return (
    <main>
      <div className="cards">
        {categories.map((currentCategory) => (
          <div className="categories--category" key={currentCategory.id}>
            <div className="event">
              <Link to={`/category/${currentCategory.id}`}>
                <h1 className="event-tittle">
                  {currentCategory.name}
                </h1>
              </Link>
            </div>
            <div className="card--parent">
              {listEvents.slice(0, 28).filter((event) => event.categories[0].name === (currentCategory.name)).slice(0, 3).map((currentEvent) => (
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
        ))}
      </div>
    </main>
  );
};

export default Categories;
