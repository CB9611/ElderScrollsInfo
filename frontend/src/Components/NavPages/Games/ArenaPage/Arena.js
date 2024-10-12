import './Arena.css';
import ArenaParagraph1 from './ArenaDesc/ArenaParagraph1';
import ArenaParagraph2 from './ArenaDesc/ArenaParagraph2';
import ArenaParagraph3 from './ArenaDesc/ArenaParagraph3';
import ArenaImage1 from '../../../Images/Arena/arena1.png';
import ArenaImage2 from '../../../Images/Arena/arena2.jpg';
import ArenaImage3 from '../../../Images/Arena/arena3.jpg';

function Arena() {
  return (
    <div className="arena-container">
      <div className="arena-top">
        <img className="arena-image" src={ArenaImage1} alt="Arena" />
        <body className="arena-body">
          <h1 className="arena-header">The Elder Scrolls I: Arena</h1>
          <ArenaParagraph1 />
        </body>
      </div>
      <div className="arena-mid">
        <body className="arena-body">
          <ArenaParagraph2 />
        </body>
        <img className="arena-image" src={ArenaImage2} alt="Arena" />
      </div>
      <div className="arena-bottom">
        <img className="arena-image" src={ArenaImage3} alt="Arena" />
        <body className="arena-body">
          <ArenaParagraph3 />
        </body>
      </div>
    </div>
  );
}

export default Arena;
