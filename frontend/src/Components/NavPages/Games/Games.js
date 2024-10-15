import './Games.css';

// import Game Covers
import Arena from '../../Images/GameCovers/Arena.jpg';
import Daggerfall from '../../Images/GameCovers/Daggerfall.jpg';
import Morrowind from '../../Images/GameCovers/Morrowind.jpg';
import Oblivion from '../../Images/GameCovers/Oblivion.png';
import Skyrim from '../../Images/GameCovers/Skyrim.png';
import ESonline from '../../Images/GameCovers/ESO_Online.png';

function Games() {
  return (
    <div className="games-container">
      <div className="games-arena">
        <img className="games-image" src={ Arena } alt="Arena" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls I: Arena</h1>
          <p className="es-font-size">The imperial battlemage Jagar Tharn betrays the Emperor Uriel Septim by imprisoning him in an alternate dimension, then assuming the Emperor’s identity and place on the throne. A lone prisoner must travel to Tamriel’s most famous and dangerous sites to collect the shattered Staff of Chaos, save the Emperor and free the Empire.</p>
        </body>
      </div>
      <div className="games-divider" />
      <div className="games-daggerfall">
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls II: Daggerfall</h1>
          <p className="es-font-size">The ancient golem Numidium, a powerful weapon once used by the great Tiber Septim to unify Tamriel, has been found in Iliac Bay. In the power struggle that follows, the King of Daggerfall is murdered and his spirit haunts the kingdom. The Emperor Uriel Septim VII sends his champion to the province of High Rock to put the king’s spirit to rest and ensure that the golem does not fall into the wrong hands.</p>
        </body>
        <img className="games-image" src={ Daggerfall } alt="Daggerfall" />
      </div>
      <div className="games-divider" />
      <div className="games-morrowind">
        <img className="games-image" src={ Morrowind } alt="Morrowind" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls III: Morrowind</h1>
          <p className="es-font-size">The Lost Prophecies speak of the Incarnate, a reincarnation of the Dunmer hero Nerevar, arriving in Morrowind to rid the land of a dark curse. To fulfill this prophecy, the Emperor sends an unknown and uncertain imperial courier to the island of Vvardenfell. Through a series of dangerous and magical quests, this unknown courier is transformed into one of the Emprire’s most enduring heroes.</p>
        </body>
      </div>
      <div className="games-divider" />
      <div className="games-oblivion">
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls IV: Oblivion</h1>
          <p className="es-font-size">In the shadow of evil, a hero will rise from the ashes of a fallen empire. The gates have been opened, and the battle has begun. Only one thing can save the world from Mehrunes Dagon and the demonic hordes of Oblivion. The true heir of the Septim line must be found and restored to the Imperial throne. The fate of the world rests in the hands of one. Find him, and shut the jaws of Oblivion.</p>
        </body>
        <img className="games-image" src={ Oblivion } alt="Oblivion" />
      </div>
      <div className="games-divider" />
      <div className="games-skyrim">
        <img className="games-image" src={ Skyrim } alt="Skyrim" />
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls V: Skyrim</h1>
          <p className="es-font-size">The Empire of Tamriel is on the edge. The High King of Skyrim has been murdered. Alliances form as claims to the throne are made. In the midst of this conflict, a far more dangerous, ancient evil is awakened. Dragons, long lost to the passages of the Elder Scrolls, have returned to Tamriel. The future of Skyrim, even the Empire itself, hangs in the balance as they wait for the prophesized Dragonborn to come; a hero born with the power of The Voice, and the only one who can stand amongst the dragons.</p>
        </body>
      </div>
      <div className="games-divider" />
      <div className="games-eso">
        <body className="games-body">
          <h1 className="games-header">The Elder Scrolls: Online</h1>
          <p className="es-font-size">The Elder Scrolls Online (ESO) is a massively multiplayer online role-playing game (MMORPG) set in the expansive universe of Tamriel, a world known from the popular Elder Scrolls series. Players can explore a vast, open world filled with diverse regions, dungeons, and quests, either solo or with friends. With a variety of playable races and classes, ESO offers flexible character customization, crafting systems, and skill progression. Its story-driven content includes an overarching main plot, guild missions, and frequent expansions and updates, allowing players to shape their experience through choices and alliances in a constantly evolving game world.</p>
        </body>
        <img className="games-image" src={ ESonline } alt="Elder Scrolls: Online" />
      </div>
    </div>
  );
}

export default Games;
