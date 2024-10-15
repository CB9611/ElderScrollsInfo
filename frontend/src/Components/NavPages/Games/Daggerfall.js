import './Games.css';
import DaggerfallImage1 from '../../Images/Daggerfall/daggerfall1.jpg';
import DaggerfallImage2 from '../../Images/Daggerfall/daggerfall2.jpg';
import DaggerfallImage3 from '../../Images/Daggerfall/daggerfall3.jpg';

function Daggerfall() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="daggerfall-image" src={DaggerfallImage1} alt="Daggerfall" />
        <body className="daggerfall-body">
          <h1 className="es-header">The Elder Scrolls II: Daggerfall</h1>
          <p className="es-font-size">The Elder Scrolls II: Daggerfall, released in 1996, is the second installment in the Elder Scrolls series and is known for its vast open world and complex gameplay mechanics. Set in the provinces of High Rock and Hammerfell, Daggerfall offers players a massive game world—one of the largest in any RPG—with hundreds of towns, cities, and dungeons to explore. The game’s story follows the player as they are sent by Emperor Uriel Septim VII on a mission to investigate the ghost of King Lysandus, who haunts the city of Daggerfall. Simultaneously, the player is tasked with finding a mysterious letter connected to the powerful Numidium, a colossal golem central to the history of the Empire.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="daggerfall-body">
          <p className="es-font-size">The main quest of Daggerfall is rich with political intrigue, ancient lore, and multiple factions vying for control of the powerful Numidium. Players can choose different paths as they uncover the truth behind Lysandus’ death and the motivations of the various noble houses, kings, and secret organizations that seek to use the Numidium to reshape Tamriel’s future. Daggerfall’s storyline allows for multiple possible endings, based on player choices, which became a hallmark of the series. These endings reflect the player's decisions regarding alliances and morality, giving the game a sense of depth and replayability. Alongside the main quest, players are free to explore the vast world, join guilds, and complete a nearly limitless number of side quests.</p>
        </body>
        <img className="daggerfall-image" src={DaggerfallImage2} alt="Daggerfall" />
      </div>
      <div className="es-separator">
        <img className="daggerfall-image" src={DaggerfallImage3} alt="Daggerfall" />
        <body className="daggerfall-body">
          <p className="es-font-size">One of Daggerfall's standout features is its detailed character customization and progression system, which includes a wide range of skills, attributes, and even a complex reputation system. Players can create their own spells, enchant items, and even become a vampire, werewolf, or lycanthrope. The game’s ambition and complexity set it apart from other RPGs of its time, despite some technical limitations and bugs. The Elder Scrolls II: Daggerfall helped define the series’ identity, emphasizing player freedom, intricate storytelling, and a richly detailed world. Its ambitious scale and depth have earned it a lasting legacy as a key milestone in the development of open-world RPGs.</p>
        </body>
      </div>
    </div>
  );
}

export default Daggerfall;
