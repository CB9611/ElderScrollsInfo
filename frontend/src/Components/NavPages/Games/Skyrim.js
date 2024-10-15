import './Games.css';
import SkyrimImage1 from '../../Images/Skyrim/skyrim1.jpg';
import SkyrimImage2 from '../../Images/Skyrim/skyrim2.jpg';
import SkyrimImage3 from '../../Images/Skyrim/skyrim3.jpg';

function Skyrim() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="skyrim-image" src={SkyrimImage1} alt="Skyrim" />
        <body className="skyrim-body">
          <h1 className="es-header">The Elder Scrolls V: Skyrim</h1>
          <p className="es-font-size">The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel, a continent on the planet Nirn. Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon prophesied to destroy the world. Throughout the game, the player completes quests and develops the character by improving skills. The game continues the open world tradition of its predecessors by allowing the player to travel to discovered locations in the game world at any time, and to ignore or postpone the main storyline indefinitely.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="skyrim-body">
          <p className="es-font-size">Skyrim was developed using the Creation Engine, which was rebuilt specifically for the game. The team opted for a unique and more diverse open world than Oblivion's Imperial Province of Cyrodiil, which game director and executive producer Todd Howard considered less interesting by comparison.</p>
        </body>
        <img className="skyrim-image" src={SkyrimImage2} alt="Skyrim" />
      </div>
      <div className="es-separator">
        <img className="skyrim-image" src={SkyrimImage3} alt="Skyrim" />
        <body className="skyrim-body">
          <p className="es-font-size">Upon release, the game received critical acclaim, with praise for its character advancement, world design, visuals, and dual-wielding combat. Criticism targeted the melee combat, dragon battles, and numerous technical issues present at launch. The game shipped over seven million units within the first week of its release and had sold over 20 million units by June 2013. It is considered one of seventh generation console gaming's most significant titles and one of the greatest video games ever made.</p>
        </body>
      </div>
    </div>
  );
}

export default Skyrim;
