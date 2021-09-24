import react from 'react';
import './style.scss';
import background_searchbar from 'src/assets/Image/background.jpg';
import { useSelector, useDispatch } from 'react-redux';
import SelectBanniere from './SelectBanniere';
import Input from './Input';

const Searchbar = () => {
  const searchOpen = useSelector((state) => state.burgerSearch);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGER_SEARCH',
    });
  };
  const handleSubmit = () => {
    console.log('handleSubmit SearchBar OK');
  };

  return (
    <div className="banniere" style={{ backgroundImage: `url(${background_searchbar})` }}>
      <div className="banniere--searchBar">

        <Input
          className="searchBar--input"
        />

        <SelectBanniere
          choice={categories}
        />

        {/* <input type="date" className="searchBar--select"></input> */}
        <button
          className="searchBar--buttonSubmitGO"
          onClick={handleSubmit}
        >
          GO !
        </button>
      </div>

      <button className="searchBar--buttonSubmitMobile" onClick={handleClick}>
        Search
      </button>

      {searchOpen
      && (
      <div className="searchBar--hidden">

        <Input
          className="searchBar--input--hidden"
        />
        <SelectBanniere
          choice={categories}
        />
        {/*  <input type="date" className="searchBar--select"></input> */}
      </div>
      )}
    </div>
  );
};

export default Searchbar;
