import './style.scss';
import EventForm from 'src/components/EventForm';

import sire from 'src/assets/Image/sire.png';
import ben from 'src/assets/Image/ben.png';
import tai from 'src/assets/Image/tai.png';
import antoine from 'src/assets/Image/antoine.png';
import claire from 'src/assets/Image/claire.png';

const AboutUs = () => (
  <>
    <EventForm />
    <div className="about-us">
      <h1 className="about-title">Meet the team</h1>
      <div className="peoples">

        <div className="person">
          <div className="div-image">
            <img src={ben} alt="" className="image" />
          </div>
          <h3 className="text"> Benjamin: Product Owner / Lead developer back</h3>
        </div>

        <div className="person">
          <div className="div-image">
            <img src={sire} alt="" className="image" />
          </div>
          <h3 className="text"> Siré: Scrum Master</h3>
        </div>

        <div className="person">
          <div className="div-image">
            <img src={tai} alt="" className="image" />
          </div>
          <h3 className="text"> Tai: Git Master</h3>
        </div>
        <div className="person">

          <div className="div-image">
            <img src={claire} alt="" className="image" />
          </div>
          <h3 className="text"> Claire: Technical referent / Lead designer</h3>
        </div>
        <div className="person">
          <div className="div-image">
            <img src={antoine} alt="" className="image" />
          </div>
          <h3 className="text">Antoine: Lead developer front</h3>
        </div>

      </div>
    </div>
  </>

);

export default AboutUs;
