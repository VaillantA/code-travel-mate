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
  const profilList = useSelector((state) => state.profil.list);
  const navList = useSelector((state) => state.profil.profilCardsOpen);
  const favoritesList = useSelector((state) => state.profil.favoritesOpen);
  console.log(favoritesList);
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
        {profilList.map((currentprofil) => (
          <div key={currentprofil.id}>
            <div>
              <img src={currentprofil.image} alt="avatar" />
            </div>
            <ul className="infos">
              <li>{currentprofil.nickname}</li>
              <li>{currentprofil.age}</li>
              <li>{currentprofil.nationality}</li>
              <li>{currentprofil.language}</li>
            </ul>
          </div>
        ))}

        <div className="description">
          <div className="description-text">
            <p>hello everyone I  just landed in Sao Paulo and I hope to find new friends so that my trip will be the most enriching </p>
          </div>
          <div className="buttons">
            <button className="buttons-profil">
              <p>modifier le profil</p>
            </button>
            <button className="buttons-event">
              <p>créer un événement</p>
            </button>
          </div>
        </div>
      </div>
      <div className="head">
        <ul className="navList">
          <li className={navList ? 'navItem active' : 'navItem'}>
            <button className="navItem-button" onClick={handleClick}>
              <svg aria-label="" className="navItem-icon" color="#262626" fill="#262626" role="img" viewBox="0 0 48 48"><path clipRule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fillRule="evenodd" /></svg>
              <p className="navItem-text">MES EVENEMENTS </p>
            </button>
          </li>
          <li className={favoritesList ? 'navItem active' : 'navItem'}>
            <button className="navItem-button" onClick={click}>
              <svg aria-label="J’aime" className="navItem-icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" /></svg>
              <p className="navItem-text">FAVORIS</p>
            </button>
          </li>
          <li className="navItem">
            <button className="navItem-button">
              <svg aria-label="" className="navItem-icon" color="#262626" fill="#262626" role="img" viewBox="0 0 48 48"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z" /></svg>
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

Header.propTypes = {
  nickname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,

};

export default Header;
