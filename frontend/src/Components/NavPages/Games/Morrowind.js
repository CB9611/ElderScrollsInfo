import './Games.css';
import MorrowindImage1 from '../../Images/Morrowind/morrowind1.jpeg';
import MorrowindImage2 from '../../Images/Morrowind/morrowind2.jpg';
import MorrowindImage3 from '../../Images/Morrowind/morrowind3.png';
import MorrowindImage4 from '../../Images/Morrowind/morrowind4.jpg';
import MorrowindImage5 from '../../Images/Morrowind/morrowind5.jpg';

function Morrowind() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="morrowind-image" src={MorrowindImage1} alt="Morrowind" />
        <body className="morrowind-body">
          <h1 className="es-header">The Elder Scrolls III: Morrowind</h1>
          <p className="es-font-size">The Elder Scrolls III: Morrowind, released in 2002, is a critically acclaimed open-world RPG that takes place on the volcanic island of Vvardenfell, part of the larger province of Morrowind. The game’s story centers on the player’s role as the prophesied Nerevarine, a reincarnation of the legendary Dunmer hero Indoril Nerevar, who is destined to defeat the dark god Dagoth Ur and bring peace to Morrowind. The game opens with the player arriving in the city of Seyda Neen as an unknown outlander, freed by the Emperor’s decree, and tasked with working for the Blades, the Emperor’s secret agents. As the player explores Vvardenfell, they uncover the political, religious, and supernatural forces at play in the province, while slowly piecing together their destiny.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="morrowind-body">
          <p className="es-font-size">The main storyline is deeply intertwined with the culture and history of the Dunmer (Dark Elves), who dominate Morrowind’s society. The central conflict revolves around the Tribunal, a trio of god-kings who have ruled Morrowind for millennia, and their former ally Dagoth Ur, who seeks to use the power of the Heart of Lorkhan to gain dominion over Tamriel. As the Nerevarine, the player is caught in the struggle between the Tribunal’s fading power and Dagoth Ur’s rise. Along the way, they must navigate a web of politics involving the Great Houses, such as House Hlaalu, Telvanni, and Redoran, as well as the Ashlander tribes, who hold ancient prophecies regarding the Nerevarine.</p>
        </body>
        <img className="morrowind-image" src={MorrowindImage2} alt="Morrowind" />
      </div>
      <div className="es-separator">
        <img className="morrowind-image" src={MorrowindImage3} alt="Morrowind" />
          <body className="morrowind-body">
        <p className="es-font-size">Morrowind’s world is renowned for its exotic and alien atmosphere, setting it apart from the more traditional fantasy environments of previous Elder Scrolls games. Vvardenfell’s landscape is shaped by the towering Red Mountain, surrounded by ashen wastelands, fungal forests, and strange creatures unique to the region. The architecture, culture, and customs of the Dunmer give Morrowind a distinct identity, blending religious dogma with a harsh, feudal society. The lore is rich, with books, NPCs, and environmental storytelling immersing players in a world steeped in history, mystery, and conflict. Every city and faction has its own flavor, making exploration both rewarding and immersive.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="morrowind-body">
          <p className="es-font-size">Beyond the main quest, Morrowind offers an extensive range of side quests, factions, and guilds to join, allowing players to forge their own path. The Mage’s Guild, Fighter’s Guild, Thieves Guild, and Morag Tong (an assassination guild) all provide unique questlines that expand the game’s narrative depth. Players can also join one of the three Great Houses, each offering different political missions and character progression. In addition to these, the Tribunal Temple and the Imperial Cult provide religious paths for those looking to delve into the spiritual conflicts of Morrowind. The game’s freedom to explore and interact with the world in numerous ways is one of its defining features, allowing players to shape their experience according to their choices.</p>
        </body>
        <img className="morrowind-image" src={MorrowindImage4} alt="Morrowind" />
      </div>
      <div className="es-separator">
        <img className="morrowind-image" src={MorrowindImage5} alt="Morrowind" />
        <body className="morrowind-body">
          <p className="es-font-size">The Elder Scrolls III: Morrowind is not only praised for its deep narrative and world-building but also for its complexity and challenge. Unlike later games in the series, Morrowind does not hold the player’s hand, offering little in the way of objective markers or fast travel, instead encouraging players to read in-game directions, navigate the landscape themselves, and rely on in-game transportation systems like silt striders or guild teleportation. This makes exploration feel more meaningful and earned. Its impact on RPGs and open-world design is immense, as Morrowind pushed the boundaries of player freedom, environmental storytelling, and world depth. Its legacy endures, with many fans and modders continuing to expand and revisit its rich and unique setting.</p>
        </body>
      </div>
    </div>
  );
}

export default Morrowind;
