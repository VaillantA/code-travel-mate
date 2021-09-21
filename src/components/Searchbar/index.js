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
      {/* <SelectBanniere
        destination={destination}
        classname="searchBar--pays"
      /> 
      <SelectBanniere
        villes={villes}
        classname="searchBar--ville"
      />
      <SelectBanniere
        categories={categories}
        classname="searchBar--categories"
      />
      <SelectBanniere 
        classname="searchBar--date"
      /> */}
      <select className="searchBar--pays">
        <option value="France">France</option>
        <option value="Espagne">Espagne</option>
        <option value="Australie">Australie</option>
        <option value="Canada">Canada</option>
      </select> 
      <select className="searchBar--ville">
        <option value="Paris">Paris</option>
        <option value="Madrid">Madrid</option>
        <option value="Malaga">Malaga</option>
        <option value="Montréal">Montréal</option>
      </select>
      <select className="searchBar--categorie">
        <option value="Sport">Sport</option>
        <option value="Culturel">Culturel</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Festif">Festif</option>
        <option value="Rencontres">Rencontres</option>
        <option value="Nature">Nature</option>
        <option value="Entraide">Entraide</option>
      </select>
      <input type="date" className="searchBar--date"></input>
      <button className="searchBar--buttonSubmit">GO !</button>
    </div>
    <input placeholder="search" className="searchBar--input"></input>
    <button className="searchBar--buttonSubmitMobile" onClick={handleClick}>Search</button>
    
    {searchOpen && 
      <div className="searchBar--hidden">
      <select className="searchBar--pays">
          <option value="France">France</option>
          <option value="Espagne">Espagne</option>
          <option value="Australie">Australie</option>
          <option value="Canada">Canada</option>
        </select> 
        <select className="searchBar--ville">
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
          <option value="Malaga">Malaga</option>
          <option value="Montréal">Montréal</option>
        </select>
        <select className="searchBar--categorie">
          <option value="Sport">Sport</option>
          <option value="Culturel">Culturel</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Festif">Festif</option>
          <option value="Rencontres">Rencontres</option>
          <option value="Nature">Nature</option>
          <option value="Entraide">Entraide</option>
        </select>
        <input type="date" className="searchBar--date"></input>
      </div>
    }
  </div>
  )
}

export default Searchbar;


