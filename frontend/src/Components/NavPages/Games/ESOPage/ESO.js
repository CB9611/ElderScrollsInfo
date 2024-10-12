import './ESO.css';
import ESOParagraph1 from './ESODesc/ESOParagraph1';
import ESOParagraph2 from './ESODesc/ESOParagraph2';
import ESOParagraph3 from './ESODesc/ESOParagraph3';
import ESOParagraph4 from './ESODesc/ESOParagraph4';
import ESOParagraph5 from './ESODesc/ESOParagraph5';
import ESOImage1 from '../../../Images/ESO/eso1.jpg';
import ESOImage2 from '../../../Images/ESO/eso2.jpg';
import ESOImage3 from '../../../Images/ESO/eso3.jpg';
import ESOImage4 from '../../../Images/ESO/eso4.jpg';
import ESOImage5 from '../../../Images/ESO/eso5.jpg';

function ESO() {
  return (
    <div className="eso-container">
      <div className="eso-top">
        <img className="eso-image" src={ESOImage1} alt="ESO" />
        <body className="eso-body">
          <h1 className="eso-header">The Elder Scrolls: Online</h1>
          <ESOParagraph1 />
        </body>
      </div>
      <div className="eso-mid">
        <body className="eso-body">
          <ESOParagraph2 />
        </body>
        <img className="eso-image" src={ESOImage2} alt="ESO" />
      </div>
      <div className="eso-mid">
        <img className="eso-image" src={ESOImage3} alt="ESO" />
        <body className="eso-body">
          <ESOParagraph3 />
        </body>
      </div>
      <div className="eso-mid">
        <body className="eso-body">
          <ESOParagraph4 />
        </body>
        <img className="eso-image" src={ESOImage4} alt="ESO" />
      </div>
      <div className="eso-bottom">
        <img className="eso-image" src={ESOImage5} alt="ESO" />
        <body className="eso-body">
          <ESOParagraph5 />
        </body>
      </div>
    </div>
  );
}

export default ESO;
