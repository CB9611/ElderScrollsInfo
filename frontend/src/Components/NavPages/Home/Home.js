import './Home.css';
import { React, useState } from 'react';
import titleImg from '../../Images/es_title.png';

function Home() {
  const [ signUp, setmode ] = useState(false);
  const toggleSignUp = () => {
    setmode(!signUp);
  };

  return (
    <div className="home-container">
      <div className="landingpage-separator">
        <body className="home-title">
          <img className="home-title-image" src={titleImg} />
          <button className="home-signup-button" onClick={ toggleSignUp }>
            {signUp ? 'Close' : 'Sign Up?'}
          </button>
        </body>
      </div>
      <div className="signup-separator">
        <div className={ signUp ? "signup-open" : "signup-close"}>
        
        </div>
      </div>
    </div>
  );
}

export default Home;
