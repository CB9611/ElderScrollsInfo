import './Skyrim.css';
import SkyrimParagraph1 from './SkyrimDesc/SkyrimParagraph1';
import SkyrimParagraph2 from './SkyrimDesc/SkyrimParagraph2';
import SkyrimParagraph3 from './SkyrimDesc/SkyrimParagraph3';
import SkyrimImage1 from '../../../Images/Skyrim/skyrim1.jpg';
import SkyrimImage2 from '../../../Images/Skyrim/skyrim2.jpg';
import SkyrimImage3 from '../../../Images/Skyrim/skyrim3.jpg';

function Skyrim() {
  return (
    <div className="skyrim-container">
      <div className="skyrim-top">
        <img className="skyrim-image" src={SkyrimImage1} alt="Skyrim" />
        <body className="skyrim-body">
          <h1 className="skyrim-header">The Elder Scrolls V: Skyrim</h1>
          <SkyrimParagraph1 />
        </body>
      </div>
      <div className="skyrim-mid">
        <body className="skyrim-body">
          <SkyrimParagraph2 />
        </body>
        <img className="skyrim-image" src={SkyrimImage2} alt="Skyrim" />
      </div>
      <div className="skyrim-bottom">
        <img className="skyrim-image" src={SkyrimImage3} alt="Skyrim" />
        <body className="skyrim-body">
          <SkyrimParagraph3 />
        </body>
      </div>
    </div>
  );
}

export default Skyrim;
