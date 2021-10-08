import './style.scss';
import sire from 'src/assets/Image/sire.png';
import ben from 'src/assets/Image/ben.png';
import tai from 'src/assets/Image/tai.png';
import antoine from 'src/assets/Image/antoine.png';
import claire from 'src/assets/Image/claire.png';

const AboutUs = () => (
  <div className="about-us">
    <h1 className="about-us--tittle">Meet the team</h1>
    <div className="peoples">
      <div className="person">
        <div className="div-image">
          <img src={ben} alt="" className="image" />
        </div>
        <div className="person-text">
        <h2 className="person-name">Benjamin</h2>
        <h3 className="tittle-work">Product Owner / Lead developer back</h3>
        </div>
      </div>
      <div className="person">
        <div className="div-image">
          <img src={sire} alt="" className="image" />
        </div>
        <div className="person-text">
        <h2 className="person-name">Siré</h2>
        <h3>Scrum Master</h3>
        </div>
      </div>
      <div className="person">
        <div className="div-image">
          <img src={tai} alt="" className="image" />
        </div>
        <div className="person-text">
        <h2 className="person-name">Tai</h2>
        <h3>Git Master</h3>
        </div>
      </div>
      <div className="person">
        <div className="div-image">
          <img src={claire} alt="" className="image" />
        </div>
        <div className="person-text">
        <h2 className="person-name">Claire</h2>
        <h3>Référente technique / Lead designer</h3>
        </div>
      </div>
      <div className="person">
        <div className="div-image">
          <img src={antoine} alt="" className="image" />
        </div>
        <div className="person-text">
        <h2 className="person-name">Antoine</h2>
        <h3>Lead developer front</h3>
        </div>
      </div>

    </div>
  </div>

);

export default AboutUs;
