import './Morrowind.css';
import MorrowindParagraph1 from './MorrowindDesc/MorrowindParagraph1';
import MorrowindParagraph2 from './MorrowindDesc/MorrowindParagraph2';
import MorrowindParagraph3 from './MorrowindDesc/MorrowindParagraph3';
import MorrowindParagraph4 from './MorrowindDesc/MorrowindParagraph4';
import MorrowindParagraph5 from './MorrowindDesc/MorrowindParagraph5';
import MorrowindImage1 from '../../../Images/Morrowind/morrowind1.jpeg';
import MorrowindImage2 from '../../../Images/Morrowind/morrowind2.jpg';
import MorrowindImage3 from '../../../Images/Morrowind/morrowind3.png';
import MorrowindImage4 from '../../../Images/Morrowind/morrowind4.jpg';
import MorrowindImage5 from '../../../Images/Morrowind/morrowind5.jpg';

function Morrowind() {
  return (
    <div className="morrowind-container">
      <div className="morrowind-top">
        <img className="morrowind-image" src={MorrowindImage1} alt="Morrowind" />
        <body className="morrowind-body">
          <h1 className="morrowind-header">The Elder Scrolls III: Morrowind</h1>
          <MorrowindParagraph1 />
        </body>
      </div>
      <div className="morrowind-mid">
        <body className="morrowind-body">
          <MorrowindParagraph2 />
        </body>
        <img className="morrowind-image" src={MorrowindImage2} alt="Morrowind" />
      </div>
      <div className="morrowind-mid">
        <img className="morrowind-image" src={MorrowindImage3} alt="Morrowind" />
        <body className="morrowind-body">
          <MorrowindParagraph3 />
        </body>
      </div>
      <div className="morrowind-mid">
        <body className="morrowind-body">
          <MorrowindParagraph4 />
        </body>
        <img className="morrowind-image" src={MorrowindImage4} alt="Morrowind" />
      </div>
      <div className="morrowind-bottom">
        <img className="morrowind-image" src={MorrowindImage5} alt="Morrowind" />
        <body className="morrowind-body">
          <MorrowindParagraph5 />
        </body>
      </div>
    </div>
  );
}

export default Morrowind;
