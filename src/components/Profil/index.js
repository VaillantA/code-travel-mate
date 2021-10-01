/* import PropTypes from 'prop-types'; */
import { Redirect, Route, Switch } from "react-router-dom";
import ProfilCards from 'src/components/Profil/ProfilCards';


import './style.scss';
import Header from './Header';
const Profil = () => {
  return (
    <div className="profil">
      <Header nickname="Bloog4eva" age = "28" nationality = "French" language="english"/>
      {/* <ProfilCards/> */}
      <Switch>
      {/* <Route path="/profilcards">
      <ProfilCards/>
      </Route> */}
      </Switch> 
    </div>
  )
}
  


/* Profil.propTypes = {

}; */

export default Profil;
