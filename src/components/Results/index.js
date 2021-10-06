import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';


import Card from 'src/components/Card';
import Searchbar from '../Searchbar';
import './style.scss';

const Results = () => {
  const listEvents = useSelector((state) => state.events.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'REDIRECT_FALSE',
    });
  }, []);

  return (
    <>
      <Searchbar />
      <h1 className="results--title">
        Results of your search :
      </h1>
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

export default Results;
