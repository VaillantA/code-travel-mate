import Cards from 'src/components/Cards';
import Searchbar from 'src/components/Searchbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'LOAD_TRUE',
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS',
    });
  }, []);

  return (
    <div className="home">
      <Searchbar />
      <Cards />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
