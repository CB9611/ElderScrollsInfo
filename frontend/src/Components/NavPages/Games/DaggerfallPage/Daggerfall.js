import './Daggerfall.css';
import DaggerfallParagraph1 from './DaggerfallDesc/DaggerfallParagraph1.jsx';
import DaggerfallParagraph2 from './DaggerfallDesc/DaggerfallParagraph2.jsx';
import DaggerfallParagraph3 from './DaggerfallDesc/DaggerfallParagraph3.jsx';
import DaggerfallImage1 from '../../../Images/Daggerfall/daggerfall1.jpg';
import DaggerfallImage2 from '../../../Images/Daggerfall/daggerfall2.jpg';
import DaggerfallImage3 from '../../../Images/Daggerfall/daggerfall3.jpg';

function Daggerfall() {
  return (
    <div className="daggerfall-container">
      <div className="daggerfall-top">
        <img className="daggerfall-image" src={DaggerfallImage1} alt="Daggerfall" />
        <body className="daggerfall-body">
          <h1 className="daggerfall-header">The Elder Scrolls II: Daggerfall</h1>
          <DaggerfallParagraph1 />
        </body>
      </div>
      <div className="daggerfall-mid">
        <body className="daggerfall-body">
          <DaggerfallParagraph2 />
        </body>
        <img className="daggerfall-image" src={DaggerfallImage2} alt="Daggerfall" />
      </div>
      <div className="daggerfall-bottom">
        <img className="daggerfall-image" src={DaggerfallImage3} alt="Daggerfall" />
        <body className="daggerfall-body">
          <DaggerfallParagraph3 />
        </body>
      </div>
    </div>
  );
}

export default Daggerfall;
