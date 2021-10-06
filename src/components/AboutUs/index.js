import './style.scss';
import sire from 'src/assets/Image/sire.png';
import ben from 'src/assets/Image/ben.png';
import tai from 'src/assets/Image/tai.png';
import antoine from 'src/assets/Image/antoine.png';
import claire from 'src/assets/Image/claire.png';

const AboutUs = () => (
  <div className="about-us">
    <h1>Meet the team</h1>
    <div className="peoples">
      <div className="person">
        <h2>Benjamin</h2>
        <div className="div-image">
          <img src={ben} alt="" className="image" />
        </div>
        <h3>Product Owner / Lead developer back</h3>
      </div>
      <div className="person">
        <h2>Siré</h2>
        <div className="div-image">
          <img src={sire} alt="" className="image" />
        </div>
        <h3>Scrum Master</h3>
      </div>
      <div className="person">
        <h2>Tai</h2>
        <div className="div-image">
          <img src={tai} alt="" className="image" />
        </div>
        <h3>Git Master</h3>
      </div>
      <div className="person">
        <h2>Claire</h2>
        <div className="div-image">
          <img src={claire} alt="" className="image" />
        </div>
        <h3>Référente technique / Lead designer</h3>
      </div>
      <div className="person">
        <h2>Antoine</h2>
        <div className="div-image">
          <img src={antoine} alt="" className="image" />
        </div>
        <h3>Lead developer front</h3>
      </div>

    </div>
  </div>

);

export default AboutUs;
