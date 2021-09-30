import './style.scss';
import background_searchbar from 'src/assets/Image/background.jpg';
import { useSelector, useDispatch } from 'react-redux';
import SelectBanniere from './SelectBanniere';
import Input from './Input';

const Searchbar = () => {
  const searchOpen = useSelector((state) => state.searchBar.burgerSearch);
  const categories = useSelector((state) => state.searchBar.categoriesList);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGER_SEARCH',
    });
  };
  const handleSubmit = () => {
    // eslint-disable-next-line max-len
    // on veut lancer la recherche vers api en fonction de la ville et de la category demandée dans le form : cityInProgess et selectedCategory
    // on veut ensuite modifier eventsList dans le state
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
        {/*  <input type="date" className="searchBar--select"></input> */}
      </div>
      )}
    </div>
  );
};

export default Searchbar;
