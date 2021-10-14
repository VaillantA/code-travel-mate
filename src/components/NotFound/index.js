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
    document.title = 'You are lost';
  }, []);
  return (
    <div className="not-found site-container">
      <h1 className="title-h1">This page does not exist, just like this mug :</h1>
      <img src={mug} alt="" className="mug-image" />
      <p><Link className="not-found-link" to="/">Back to home page</Link></p>
    </div>
  );
};

// == Export
export default NotFound;
