import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer--separateur">
    <hr />
    <div className="footer">
      <Link to="/contact">
        Contact
      </Link>
      <p>Plan du site</p>
      <p>Mentions légales</p>
    </div>
  </div>
);

export default Footer;
