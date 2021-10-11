import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer--separateur">
    <hr />
    <div className="footer">
      <Link to="/contact" className="footerItem">
        Contact
      </Link>
      <p className="footerItem">Plan du site</p>
      <Link to="/mentions-legales" className="footerItem">
        Mentions legales
      </Link>
    </div>
  </div>
);

export default Footer;
