import './Games.css';

// import Game Covers
import Arena from '../../Images/GameCovers/Arena.jpg';
import Daggerfall from '../../Images/GameCovers/Daggerfall.jpg';
import Morrowind from '../../Images/GameCovers/Morrowind.jpg';
import Oblivion from '../../Images/GameCovers/Oblivion.png';
import Skyrim from '../../Images/GameCovers/Skyrim.png';

// import Game Descriptions
import ArenaDesc from './GameDesc/ArenaDesc.jsx';
import DaggerfallDesc from './GameDesc/DaggerfallDesc.jsx';
import MorrowindDesc from './GameDesc/MorrowindDesc.jsx';
import OblivionDesc from './GameDesc/OblivionDesc.jsx';
import SkyrimDesc from './GameDesc/SkyrimDesc.jsx';

function Games() {
  return (
    <div className="games-container">
      <div className="games-box">
        <body className="games-body">
          <h1 className="games-header">Elder Scrolls Titles</h1>
          <ul className="game-cover-list">
            <div className="css-line" />
            <div className="game-title">The Elder Scrolls I: Arena</div>
            <li className="list-items">
              <div className="cover"><img src={ Arena } alt="Arena Game Cover" /></div>
              <div className="description"><ArenaDesc /></div>
            </li>
            <div className="css-line" />
            <div className="game-title">The Elder Scrolls II: Daggerfall</div>
            <li className="list-items">
              <div className="cover"><img src={ Daggerfall } alt="Daggerfall Game Cover" /></div>
              <div className="description"><DaggerfallDesc /></div>
            </li>
            <div className="css-line" />
            <div className="game-title">The Elder Scrolls III: Morrowind</div>
            <li className="list-items">
              <div className="cover"><img src={ Morrowind } alt="Morrowind Game Cover" /></div>
              <div className="description"><MorrowindDesc /></div>
            </li>
            <div className="css-line" />
            <div className="game-title">The Elder Scrolls IV: Oblivion</div>
            <li className="list-items">
              <div className="cover"><img src={ Oblivion } alt="Oblivion Game Cover" /></div>
              <div className="description"><OblivionDesc /></div>
            </li>
            <div className="css-line" />
            <div className="game-title">The Elder Scrolls V: Skyrim</div>
            <li className="list-items">
              <div className="cover"><img src={ Skyrim } alt="Skyrim Game Cover" /></div>
              <div className="description"><SkyrimDesc /></div>
            </li>
          </ul>
        </body>
      </div>
    </div>
  );
}

export default Games;
