import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer--separateur">
    <hr />
    <div className="footer">
      <Link to="/contact" className="footerItem">
        Contact us
      </Link>
      <p className="footerItem">Privacy policy</p>
      <Link to="/mentions-legales" className="footerItem">
        Legales mentions
      </Link>
    </div>
  </div>
);

export default Footer;
