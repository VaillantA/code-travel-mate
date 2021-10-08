import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import anais from 'src/assets/Image/anais.png';
import fabio from 'src/assets/Image/fabio.png';
import alexis from 'src/assets/Image/alexis.png';

// == Import
import './style.scss';

// == Composant
const NotFound = () => {
  useEffect(() => {
    document.title = 'Vous etes perdu';
  }, []);
  return (
    <div className="not-found">
      <h1>Page non trouvée</h1>
      <p className="notfound">Désolé cette page n'existe pas</p>
      <div className="images">
        <img src={fabio} alt="" className="image" />
        <img src={anais} alt="" className="image" />
        <img src={alexis} alt="" className="image" />
      </div>
      <p><Link className="not-found-link" to="/">Retourner à l'accueil</Link></p>
    </div>
  );
};

// == Export
export default NotFound;
