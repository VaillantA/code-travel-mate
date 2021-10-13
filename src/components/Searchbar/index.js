import './style.scss';
import background_searchbar from 'src/assets/Image/background.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SelectBanniere from './SelectBanniere';
import Input from './Input';

const Searchbar = () => {
  const searchOpen = useSelector((state) => state.searchBar.burgerSearch);
  const categories = useSelector((state) => state.searchBar.categoriesList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_CATEGORIES',
    });
  }, []);
  const handleClick = () => {
    dispatch({
      type: 'BURGER_SEARCH',
    });
  };
  const handleSubmit = () => {
    dispatch({
      type: 'SEARCH_SELECTED_EVENTS',
    });
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
          type="button"
          className="searchBar--buttonSubmitGO"
          onClick={handleSubmit}
        >
          GO !
        </button>
      </div>
      <button
        type="button"
        className="searchBar--buttonSubmitMobile"
        onClick={handleClick}
      >
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
        <button
          type="button"
          className="searchBar--buttonSubmitGO--hidden"
          onClick={handleSubmit}
        >
          GO !
        </button>
      </div>
      )}
    </div>
  );
};

export default Searchbar;
