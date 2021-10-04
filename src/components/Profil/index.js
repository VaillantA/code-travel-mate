/* import PropTypes from 'prop-types'; */
import { Redirect, Route, Switch } from "react-router-dom";
import ProfilCards from 'src/components/Profil/ProfilCards';
import { useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';


import './style.scss';
import Header from './Header';


const Profil = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_USER',
      id: id,
    });
  }, [])
  
  return (
    <div className="profil">
      <Header  /* nickname={nickname} age = {age} nationality = {nationality} language={language} */ />
    
    </div>
  )
}
  


/* Profil.propTypes = {

}; */

export default Profil;
