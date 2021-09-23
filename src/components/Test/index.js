import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Test = () => {
  const name = useSelector((state) => state.countries.name);
  const dispatch = useDispatch();
  useEffect(() => {
    // ici j'utilise un action creator qui est tout simplement
    // une fonction qui retourne l'objet action
    // je dispatche cet objet action
    dispatch({
      type: 'FETCH_COUNTRIES',
    });
  }, []);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Test;
