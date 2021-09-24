import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Test = () => {
  const countries = useSelector((state) => state.country.countriesList);
  console.log(countries);
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
      { countries.map((country) => (
        <h2 key={country.id}>{country.name}</h2>
      ))}
    </div>
  );
};

export default Test;
