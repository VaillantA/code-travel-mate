import react from 'react';
import './style.scss';
import background_searchbar from 'src/assets/Image/background_searchbar.jpg';
import { useSelector, useDispatch } from 'react-redux';
import SelectBanniere from './SelectBanniere';


const Searchbar = () => {
 
  const searchOpen = useSelector((state) => state.burgerSearch);
  const destination = useSelector((state) => state.destination);
  const villes = useSelector((state) => state.villes);
  const categories = useSelector((state) => state.categories);


  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGER_SEARCH',
    });
  };


  return (
  <div className="banniere" style={{ backgroundImage: `url(${background_searchbar})` }}>
    <div className="banniere--searchBar">
     
      <SelectBanniere
        choice={destination}
      /> 
      <SelectBanniere
        choice={villes}
      />
      <SelectBanniere
        choice={categories}
      />
      
      <input type="date" className="searchBar--select"></input>
      <button className="searchBar--buttonSubmit">GO !</button>
    </div>
    <input placeholder="search" className="searchBar--input"></input>
    <button className="searchBar--buttonSubmitMobile" onClick={handleClick}>Search</button>
    
    {searchOpen && 
      <div className="searchBar--hidden">
        <SelectBanniere
        choice={destination}
        />
        <SelectBanniere
          choice={villes}
        />
        <SelectBanniere
          choice={categories}
        />
        <input type="date" className="searchBar--select"></input>
      </div>
    }
  </div>
  )
}

export default Searchbar;


