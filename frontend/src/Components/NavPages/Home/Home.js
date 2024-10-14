import './Home.css';
import titleImg from '../../Images/elderscrolls_title.png';

function Home() {
  return (
    <div className="home-container">
      <body className="home-title">
        <img className="home-title-image" src={titleImg} />
      </body>
    </div>
  );
}

export default Home;
