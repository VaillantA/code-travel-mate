import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Card from 'src/components/Card';
import avatar from 'src/assets/images/avatar.png';
import ProfilCards from 'src/components/Profil/ProfilCards';
import FavorisCards from 'src/components/Profil/FavorisCards';

import './style.scss';

const Header = (/* {nickname,
   age,
   nationality,
   language} */) => {
  const navList = useSelector((state) => state.profil.profilCardsOpen);
  const favoritesList = useSelector((state) => state.profil.favoritesOpen);
  /* INFO USESELECTOR */
  /* const avatar = useSelector((state) => state.profil.image); */
  const nickname = useSelector((state) => state.profil.nickname);
  const age = useSelector((state) => state.profil.age);
  const nationality = useSelector((state) => state.profil.nationality);
  const language = useSelector((state) => state.profil.language);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'DISPLAY_PROFILCARDS',
    });
  };
  const click = () => {
    dispatch({
      type: 'DISPLAY_FAVORITESCARDS',
    });
  };
  return (
    <div className="header">
      <div className="header-profil">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <ul className="infos">
          <li>  {nickname} </li>
          <li> {age}</li>
          <li> {nationality}</li>
          {/* <li> {language}</li> */}
        </ul>
        <div className="description">
          <div className="description-text">
            <p>hello everyone I  just landed in Sao Paulo and I hope to find new friends so that my trip will be the most enriching </p>
          </div>
          <div className="buttons">
            <button className="buttons-profil" type="button">
              <p>modifier le profil</p>
            </button>
            <button className="buttons-event" type="button">
              <p>créer un événement</p>
            </button>
          </div>
        </div>
      </div>
      <div className="head">
        <ul className="navList">
          <li className={navList ? 'navItem active' : 'navItem'}>
            <button className="navItem-button" onClick={handleClick} type="button">
              <svg aria-label="" className="navItem-icon" color="#262626" fill="#262626" role="img" viewBox="0 0 48 48" />
              <p className="navItem-text">MES EVENEMENTS </p>
            </button>
          </li>
          <li className={favoritesList ? 'navItem active' : 'navItem'}>
            <button className="navItem-button" onClick={click} type="button">
              <svg aria-label="J’aime" className="navItem-icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24" />
              <p className="navItem-text">FAVORIS</p>
            </button>
          </li>
          <li className="navItem">
            <button className="navItem-button" type="button">
              <svg aria-label="" className="navItem-icon" color="#262626" fill="#262626" role="img" viewBox="0 0 48 48" />
              <p className="navItem-text">MATES</p>
            </button>
          </li>
        </ul>
      </div>
      {navList
      && (
      <ProfilCards />)}

      {favoritesList
      && (
      <FavorisCards />)}
    </div>
  );
};

/* Header.propTypes = {
  nickname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,

}; */

export default Header;
