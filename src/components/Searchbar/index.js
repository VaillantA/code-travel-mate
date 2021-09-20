import './style.scss';
import background_searchbar from 'src/assets/Image/background_searchbar.jpg';


const Searchbar = () => {

  return (
  <div className="banniere" style={{ backgroundImage: `url(${background_searchbar})` }}>

    <div className="banniere--searchBar">
      <input placeholder="search" className="searchBar--input"></input>
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
      <button className="searchBar--buttonSubmit">GO !</button>
    </div>

  </div>
  );
}

export default Searchbar;


