import './Home.css';
import HomeParagraph1 from './HomeParagraph1';
import HomeParagraph2 from './HomeParagraph2';
import HomeParagraph3 from './HomeParagraph3';
import HomeImage1 from '../../Images/backgroundimg-about.jpg';
import HomeImage2 from '../../Images/backgroundimg-home.jpg';
import HomeImage3 from '../../Images/backgroundimg-react.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-top">
        <img className="home-image" src={HomeImage1} alt="Skyrim Image" />
        <body className="home-body">
          <h1 className="home-header">The Elder Scrolls V: Skyrim</h1>
          <HomeParagraph1 />
        </body>
      </div>
      <div className="home-mid">
        <body className="home-body">
          <HomeParagraph2 />
        </body>
        <img className="home-image" src={HomeImage2} alt="Skyrim Image" />
      </div>
      <div className="home-bottom">
        <img className="home-image" src={HomeImage3} alt="Skyrim Image" />
        <body className="home-body">
          <HomeParagraph3 />
        </body>
      </div>
    </div>
  );
}

export default Home;
