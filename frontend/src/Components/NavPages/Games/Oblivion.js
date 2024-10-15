import './Games.css';
import OblivionImage1 from '../../Images/Oblivion/oblivion1.jpg';
import OblivionImage2 from '../../Images/Oblivion/oblivion2.jpg';
import OblivionImage3 from '../../Images/Oblivion/oblivion3.jpg';
import OblivionImage4 from '../../Images/Oblivion/oblivion4.jpg';
import OblivionImage5 from '../../Images/Oblivion/oblivion5.jpg';

function oblivion() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="oblivion-image" src={OblivionImage1} alt="Oblivion" />
        <body className="oblivion-body">
          <h1 className="es-header">The Elder Scrolls IV: Oblivion</h1>
          <p className="es-font-size">The Elder Scrolls IV: Oblivion is an open-world role-playing game set in the heart of Tamriel, in the province of Cyrodiil. The game’s story is framed by the assassination of Emperor Uriel Septim VII, which throws the Empire into chaos as the Septim bloodline, protectors of the realm, is severed. In the opening moments of the game, the player finds themselves as a prisoner who becomes entangled in the Emperor’s escape attempt. Before his death, Uriel entrusts the player with an urgent mission: find his illegitimate son, Martin Septim, the last heir to the throne, and stop a looming catastrophe—an invasion by the Daedric Prince Mehrunes Dagon. The main story unfolds as the player seeks to restore order to the Empire by preventing the destruction of the mortal realm by Daedric forces from Oblivion.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="oblivion-body">
          <p className="es-font-size">The main antagonist, Mehrunes Dagon, orchestrates a Daedric invasion through the opening of Oblivion Gates across Cyrodiil. These gates serve as portals between Tamriel and Dagon’s plane, unleashing Daedric creatures to terrorize the land. The player’s central task is to close these gates and thwart Dagon’s attempt to merge his realm with the mortal world. To achieve this, the player must find Martin Septim, a former priest living in seclusion, and help him come to terms with his heritage as the last heir to the Septim dynasty. The story takes the player through several major cities and ancient ruins as they gather allies, learn about Daedric magic, and prepare for the final confrontation with Mehrunes Dagon’s forces.</p>
        </body>
        <img className="oblivion-image" src={OblivionImage2} alt="Oblivion" />
      </div>
      <div className="es-separator">
        <img className="oblivion-image" src={OblivionImage3} alt="Oblivion" />
        <body className="oblivion-body">
          <p className="es-font-size">A significant part of the game focuses on the Blades, an ancient order sworn to protect the Empire and its rulers. The Blades, led by Grandmaster Jauffre, help the player locate Martin and provide guidance throughout the main quest. Martin himself is a complex and compelling character—a reluctant hero who struggles with the burden of being the last hope for Tamriel. As the player helps Martin discover the tools necessary to defeat Mehrunes Dagon, such as retrieving the Amulet of Kings and acquiring the powerful artifact known as the Daedric Armor, the story builds toward an epic final battle to protect the Imperial City from the Daedric forces.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="oblivion-body">
          <p className="es-font-size">The world of Cyrodiil is vast and richly detailed, offering more than just the central storyline. The Elder Scrolls IV: Oblivion features a multitude of side quests, guilds, and factions that players can explore. The Fighter’s Guild, Mage’s Guild, Thieves Guild, and Dark Brotherhood all have their own unique storylines, adding layers of complexity to the game. Each faction provides different opportunities for role-playing, from solving political intrigue in the Mage’s Guild to becoming a master assassin in the Dark Brotherhood. These guilds allow players to shape their character’s moral alignment and playstyle, giving them freedom to explore the game’s world as they see fit.</p>
        </body>
        <img className="oblivion-image" src={OblivionImage4} alt="Oblivion" />
      </div>
      <div className="es-separator">
        <img className="oblivion-image" src={OblivionImage5} alt="Oblivion" />
        <body className="oblivion-body">
          <p className="es-font-size">Oblivion’s overarching theme is one of impending doom and the struggle for survival against overwhelming odds. However, it also explores themes of redemption and destiny, particularly through Martin Septim’s arc as he transforms from an unsure scholar into the leader who must sacrifice himself to save Tamriel. The final battle culminates in Martin's transformation into an avatar of Akatosh, the Dragon God of Time, to defeat Mehrunes Dagon in a climactic and visually striking sequence. The Elder Scrolls IV: Oblivion is a grand narrative of political upheaval, divine intervention, and the battle between good and evil, all set against the backdrop of a richly immersive open world filled with diverse landscapes, cultures, and challenges for players to explore.</p>
        </body>
      </div>
    </div>
  );
}

export default oblivion;
