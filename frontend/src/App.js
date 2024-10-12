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
import Arena from './Components/NavPages/Games/ArenaPage/Arena.js';
import Daggerfall from './Components/NavPages/Games/DaggerfallPage/Daggerfall.js';
import Morrowind from './Components/NavPages/Games/MorrowindPage/Morrowind.js';
import Oblivion from './Components/NavPages/Games/OblivionPage/Oblivion.js';
import Skyrim from './Components/NavPages/Games/SkyrimPage/Skyrim.js';
import ESO from './Components/NavPages/Games/ESOPage/ESO.js';
import Games from './Components/NavPages/Games/Games.js';
import Home from './Components/NavPages/Home/Home.js';
import Darkmode from './Components/NavPages/Interactives/Darkmode/Darkmode.js';
import UseStateTest from './Components/NavPages/Interactives/UseStateTest/UseStateTest.js';

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
          <Route path="/Arena" element={ <Arena /> } />
          <Route path="/Daggerfall" element={ <Daggerfall /> } />
          <Route path="/Morrowind" element={ <Morrowind /> } />
          <Route path="/Oblivion" element={ <Oblivion /> } />
          <Route path="/Skyrim" element={ <Skyrim /> } />
          <Route path="/ElderScrollsOnline" element={ <ESO /> } />
          <Route path="/Games" element={ <Games /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Darkmode-Test" element={ <Darkmode /> } />
          <Route path="/UseState-Test" element={ <UseStateTest /> } />
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
