import './Games.css';
import ESOImage1 from '../../Images/ESO/eso1.jpg';
import ESOImage2 from '../../Images/ESO/eso2.jpg';
import ESOImage3 from '../../Images/ESO/eso3.jpg';
import ESOImage4 from '../../Images/ESO/eso4.jpg';
import ESOImage5 from '../../Images/ESO/eso5.jpg';

function ESO() {
  return (
    <div className="es-container">
      <div className="es-separator">
        <img className="eso-image" src={ESOImage1} alt="ESO" />
        <body className="eso-body">
          <h1 className="es-header">The Elder Scrolls: Online</h1>
          <p className="es-font-size">The Elder Scrolls Online is set in Tamriel during the Second Era, a chaotic period where the continent is divided by political strife, warring factions, and a looming supernatural threat. At the heart of the story is the conflict over the Ruby Throne of the Imperial City, which remains vacant after the Empire’s collapse. Three powerful alliances—the Daggerfall Covenant, the Aldmeri Dominion, and the Ebonheart Pact—vie for control of the throne, hoping to bring stability to the region. Players choose to align with one of these alliances, and the core story follows their journey through this conflict, while also dealing with larger, world-shaking events.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="eso-body">
          <p className="es-font-size">The central plot revolves around the Planemeld, a catastrophic event orchestrated by the Daedric Prince Molag Bal, who seeks to merge his plane of Oblivion with Tamriel. Molag Bal’s forces are led by Mannimarco, the King of Worms, a necromancer intent on aiding the Daedric Prince in exchange for power. In the game's opening moments, the player’s soul is stolen by Molag Bal, turning them into a soulless "Vestige." The player must navigate the complexities of reclaiming their soul while thwarting Molag Bal’s dark plans, which threaten to pull all of Tamriel into eternal torment.</p>
        </body>
        <img className="eso-image" src={ESOImage2} alt="ESO" />
      </div>
      <div className="es-separator">
        <img className="eso-image" src={ESOImage3} alt="ESO" />
        <body className="eso-body">
          <p className="es-font-size">As the player explores the world, they encounter the Five Companions, a group of legendary figures who played pivotal roles in Tamriel’s history. Originally formed to help Emperor Varen Aquilarios reclaim the Ruby Throne, their efforts were sabotaged by Mannimarco, leading to the Emperor's downfall. Throughout the story, the player works alongside these companions—such as the heroic Lyris Titanborn, the cunning Sai Sahan, and the mysterious Prophet (Varen in disguise)—to unravel Molag Bal’s schemes and prevent the destruction of Tamriel. The quest takes them through key locations in Tamriel, from the heart of Cyrodiil to the dark depths of Coldharbour, Molag Bal’s realm in Oblivion.</p>
        </body>
      </div>
      <div className="es-separator">
        <body className="eso-body">
          <p className="es-font-size">Beyond the main story, the political intrigue between the three alliances adds complexity to the game’s narrative. Each alliance represents a different faction of races with distinct motivations for seizing control of the Ruby Throne. The Daggerfall Covenant, led by the Bretons, Orcs, and Redguards, seeks to restore order to Tamriel through trade and military might. The Aldmeri Dominion, composed of High Elves, Wood Elves, and Khajiit, aims to unite Tamriel under Elven rule to protect the world from Daedric corruption. The Ebonheart Pact, an uneasy alliance of Nords, Dark Elves, and Argonians, seeks to preserve their autonomy while defending their lands from outside threats. This factional rivalry fuels the ongoing war for the Imperial City, and players engage in PvP combat to push their alliance toward dominance.</p>
        </body>
        <img className="eso-image" src={ESOImage4} alt="ESO" />
      </div>
      <div className="es-separator">
        <img className="eso-image" src={ESOImage5} alt="ESO" />
        <body className="eso-body">
          <p className="es-font-size">As the game expands with various chapters and DLCs, so too does the storyline. Players face additional threats from other Daedric Princes like Mehrunes Dagon in the "Gates of Oblivion" expansion, as well as explore iconic locations such as the island of Summerset, the homeland of the High Elves, and the swamps of Murkmire. These expansions introduce new characters, lore, and challenges, enriching the world of ESO. Ultimately, The Elder Scrolls Online weaves a grand tale of political struggles, ancient prophecies, and the eternal battle between mortals and Daedric powers, allowing players to shape their journey through choices, alliances, and actions that influence the fate of Tamriel.</p>
        </body>
      </div>
    </div>
  );
}

export default ESO;
