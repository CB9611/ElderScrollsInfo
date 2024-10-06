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
      <div className="games-arena">
        <img className="games-image" src={ Arena } alt="Skyrim Image" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls I: Arena</h1>
          <ArenaDesc />
        </body>
      </div>
      <div className="games-divider" />
      <div className="games-daggerfall">
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls II: Daggerfall</h1>
          <DaggerfallDesc />
        </body>
        <img className="games-image" src={ Daggerfall } alt="Skyrim Image" />
      </div>
      <div className="games-divider" />
      <div className="games-morrowind">
        <img className="games-image" src={ Morrowind } alt="Skyrim Image" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls III: Morrowind</h1>
          <MorrowindDesc />
        </body>
      </div>
      <div className="games-divider" />
      <div className="games-oblivion">
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls IV: Oblivion</h1>
          <OblivionDesc />
        </body>
        <img className="games-image" src={ Oblivion } alt="Skyrim Image" />
      </div>
      <div className="games-divider" />
      <div className="games-skyrim">
        <img className="games-image" src={ Skyrim } alt="Skyrim Image" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls V: Skyrim</h1>
          <SkyrimDesc />
        </body>
      </div>
    </div>
  );
}

export default Games;
