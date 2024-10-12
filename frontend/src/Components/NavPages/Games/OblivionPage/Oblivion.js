import './Oblivion.css';
import OblivionParagraph1 from './OblivionDesc/OblivionParagraph1';
import OblivionParagraph2 from './OblivionDesc/OblivionParagraph2';
import OblivionParagraph3 from './OblivionDesc/OblivionParagraph3';
import OblivionParagraph4 from './OblivionDesc/OblivionParagraph4';
import OblivionParagraph5 from './OblivionDesc/OblivionParagraph5';
import OblivionImage1 from '../../../Images/Oblivion/oblivion1.jpg';
import OblivionImage2 from '../../../Images/Oblivion/oblivion2.jpg';
import OblivionImage3 from '../../../Images/Oblivion/oblivion3.jpg';
import OblivionImage4 from '../../../Images/Oblivion/oblivion4.jpg';
import OblivionImage5 from '../../../Images/Oblivion/oblivion5.jpg';

function oblivion() {
  return (
    <div className="oblivion-container">
      <div className="oblivion-top">
        <img className="oblivion-image" src={OblivionImage1} alt="Oblivion" />
        <body className="oblivion-body">
          <h1 className="oblivion-header">The Elder Scrolls IV: Oblivion</h1>
          <OblivionParagraph1 />
        </body>
      </div>
      <div className="oblivion-mid">
        <body className="oblivion-body">
          <OblivionParagraph2 />
        </body>
        <img className="oblivion-image" src={OblivionImage2} alt="Oblivion" />
      </div>
      <div className="oblivion-mid">
        <img className="oblivion-image" src={OblivionImage3} alt="Oblivion" />
        <body className="oblivion-body">
          <OblivionParagraph3 />
        </body>
      </div>
      <div className="oblivion-mid">
        <body className="oblivion-body">
          <OblivionParagraph4 />
        </body>
        <img className="oblivion-image" src={OblivionImage4} alt="Oblivion" />
      </div>
      <div className="oblivion-bottom">
        <img className="oblivion-image" src={OblivionImage5} alt="Oblivion" />
        <body className="oblivion-body">
          <OblivionParagraph5 />
        </body>
      </div>
    </div>
  );
}

export default oblivion;
