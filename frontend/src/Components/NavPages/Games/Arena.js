import './Games.css';
import ArenaImage1 from '../../Images/Arena/arena1.png';
import ArenaImage2 from '../../Images/Arena/arena2.jpg';
import ArenaImage3 from '../../Images/Arena/arena3.jpg';

function Arena() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="arena-image" src={ArenaImage1} alt="Arena" />
        <body className="arena-body">
          <h1 className="es-header">The Elder Scrolls I: Arena</h1>
          <p className="es-font-size">The Elder Scrolls: Arena, released in 1994, is the first entry in the Elder Scrolls series and serves as the foundation for the expansive, open-world RPGs that would follow. Set in the fantasy world of Tamriel, Arena introduces players to a sprawling, procedurally generated landscape that includes all of the continent’s provinces, from Cyrodiil to Morrowind. The game’s story begins with the treachery of the Imperial Battlemage Jagar Tharn, who betrays Emperor Uriel Septim VII by imprisoning him in an alternate dimension. Tharn seizes control of the Empire, and the player, initially a prisoner, is tasked with recovering the shattered pieces of the powerful Staff of Chaos in order to defeat Tharn and free the emperor.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="arena-body">
          <p className="es-font-size">The game’s main quest revolves around the player’s journey to recover the eight pieces of the Staff of Chaos, each hidden in different dungeons across Tamriel. Arena's story, though more straightforward than later Elder Scrolls titles, features a world filled with dangerous enemies, ancient ruins, and mystical artifacts. Along the way, players can explore various cities, guilds, and temples, interacting with NPCs who offer quests, information, and trading opportunities. Arena also introduced key elements that would become series staples, such as the freedom to create and develop a unique character, an emphasis on exploration, and a massive, non-linear world that players could traverse at their own pace.</p>
        </body>
        <img className="arena-image" src={ArenaImage2} alt="Arena" />
      </div>
      <div className="es-separator">
        <img className="arena-image" src={ArenaImage3} alt="Arena" />
        <body className="arena-body">
          <p className="es-font-size">Despite its simple mechanics and primitive graphics compared to modern RPGs, The Elder Scrolls: Arena laid the groundwork for the series' expansive lore and open-world design philosophy. It established Tamriel as a living, breathing world filled with diverse cultures, histories, and conflicts. Arena’s ambitious scope, allowing players to travel across an entire continent, coupled with its focus on player freedom, set it apart from other RPGs of its time and paved the way for the series' evolution into the rich, immersive worlds seen in later Elder Scrolls games like Morrowind, Oblivion, and Skyrim.</p>
        </body>
      </div>
    </div>
  );
}

export default Arena;
