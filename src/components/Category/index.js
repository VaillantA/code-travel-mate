/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import Card from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';

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
  const listEvents = useSelector((state) => (state.events.list));
  
  return (
    <>
      <div className="result--card--parent">
        {listEvents.map((currentEvent) => (
          <Card
            key={currentEvent.id}
            id={currentEvent.id}
            title={currentEvent.title}
            resume={currentEvent.resume}
            date={currentEvent.startAt}
            image={currentEvent.categories[0].image}
            /* liked={isLiked} */
          />
        ))}
      </div>
    </>
  );
};

export default Category;
