/* import PropTypes from 'prop-types'; */
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfilCards from 'src/components/Profil/ProfilCards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.scss';
import Header from './Header';

const Profil = () => {
  const userId = useSelector((state) => state.login.userId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_USER',
      id: parseInt(userId, 10),
    });
  }, []);
  useEffect(() => {
    document.title = 'Profile';
  }, []);
  return (
    <div className="profil site-container">
      <Header />
    </div>
  );
};

/* Profil.propTypes = {

}; */

export default Profil;
