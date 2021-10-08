import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import anais from 'src/assets/Image/anais.png';
import fabio from 'src/assets/Image/fabio.png';
import alexis from 'src/assets/Image/alexis.png';
import mug from 'src/assets/Image/mug.png';

// == Import
import './style.scss';

// == Composant
const NotFound = () => {
  useEffect(() => {
    document.title = 'Vous etes perdu';
  }, []);
  return (
    <div className="not-found">
      <h1 className="title-h1">This page does not exist, just like this mug :</h1>
      <img src={mug} alt="" />
      {/* <div className="images">
        <img src={fabio} alt="" className="image" />
        <img src={anais} alt="" className="image" />
        <img src={alexis} alt="" className="image" />
      </div> */}


      <p><Link className="not-found-link" to="/">Retourner à l'accueil</Link></p>
    </div>
  );
};

// == Export
export default NotFound;
