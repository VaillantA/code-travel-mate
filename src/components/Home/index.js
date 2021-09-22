import Cards from 'src/components/Cards';
import Searchbar from 'src/components/Searchbar';

const Home = () => (
  <div className="home">
  <Searchbar />
  <Cards/>
  </div>
);

Home.propTypes = {

};

export default Home;
