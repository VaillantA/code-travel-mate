/* import PropTypes from 'prop-types'; */
import { Redirect, Route, Switch } from "react-router-dom";

import './style.scss';
import Header from './Header';
import ProfilCards from "./ProfilCards";
import FavorisCards from "./FavorisCards";

const Profil = () => {
  return (
    <div className="profil">
      <Header nickname="Bloog4eva" age = "28" nationality = "French" language="english"/>
      <Switch>
        <Route path="/" exact>
        <ProfilCards/>
        </Route>
        <Redirect to="/profil">
        <ProfilCards/> 
        </Redirect>
        <Route path="/favoriscards">
        <FavorisCards/>
        </Route>
      </Switch>  
    </div>
  )
}
  


/* Profil.propTypes = {

}; */

export default Profil;
