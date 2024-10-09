import { 
  React
} from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

// import styles
import './App.css';

//import navbar & footer
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';

//import content pages
import About from './Components/NavPages/About/About.js';
import Games from './Components/NavPages/Games/Games.js';
import Home from './Components/NavPages/Home/Home.js';
import DaedricDuel from './Components/NavPages/Interactives/DaedricDuel/DaedricDuel.js';

// import other
import Darkmode from './Components/Darkmode/Darkmode.js';

function App() {
  return (
    <div className="App">
      <body className="banner-container">
        {/* Navbar Component */}
        <Navbar />
      </body>
      <body className="app-body">
        {/* Declared Routes */}
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/Games" element={ <Games /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Daedric-Duel" element={ <DaedricDuel /> } />
          <Route path="/Darkmode-Test" element={ <Darkmode /> } />
        </Routes>
      </body>
      <body className="app-footer-container">
        {/* Footer Component */}
        <Footer />
      </body>
    </div>
  );
}

export default App;
