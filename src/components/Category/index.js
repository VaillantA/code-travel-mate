/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from 'src/components/Card';
import './style.scss';

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS_FROM_CATEGORY',
      id: id,
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: 'REDIRECT_FALSE',
    });
  }, []);
  // const currentCat = useSelector((state) => (state.))
  const listEvents = useSelector((state) => (state.events.list));
  // console.log(listEvents);
  const currentCategoryName = useSelector((state) => (state.events.list[0].categories[0].name));
  return (
    <div>
      <h1 className="category--title">
        {currentCategoryName}
      </h1>
      <div className="result--card--parent">
        {listEvents.map((currentEvent) => (
          <Card
            key={currentEvent.id}
            id={currentEvent.id}
            title={currentEvent.title}
            resume={currentEvent.resume}
            date={currentEvent.startAt}
            image={currentEvent.categories.length ? currentEvent.categories[0].image : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
