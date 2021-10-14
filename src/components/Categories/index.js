/* eslint-disable max-len */
import './style.scss';

import Loading from 'src/components/Loading';
import Card from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
/* import './style.scss'; */
import { useEffect } from 'react';

const Categories = () => {
  const like = 193;
  const isLiked = true;
  // const loading = useSelector((state) => state.events.loading);
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

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <main>
      <div className="cards">
        <div className="categories--ancre">
          {categories.map((currentCategory) => (
            <div className="categories--ancre--indiv" key={currentCategory.id}>
              <a href={`#${currentCategory.name}`}>{currentCategory.name}</a>
            </div>
          ))}
        </div>
        {categories.map((currentCategory) => (
          <div className="category" key={currentCategory.id} id={currentCategory.name}>
            <div className="event">
              <Link to={`/category/${currentCategory.id}`}>
                <h1 className="event-tittle">
                  {currentCategory.name}
                </h1>
              </Link>
            </div>
            <div className="card--parent">
              {listEvents.slice(0, 32).filter((event) => event.categories[0].name === (currentCategory.name)).slice(0, 3).map((currentEvent) => (
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
            <div className="fleche--up">
              <a href="#">
                <i className="fas fa-angle-double-up" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Categories;
