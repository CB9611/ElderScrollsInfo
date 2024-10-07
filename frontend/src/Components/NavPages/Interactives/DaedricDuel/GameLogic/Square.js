// /Interactives/DaedricDuel/components/Square.js
import React from 'react';
import xImage from '../SetPieces/DaedricSword-X.png';
import oImage from '../SetPieces/DaedricBow-O.png';
import '../DaedricDuel.css';

const Square = ({ value, onClick }) => {
  const renderContent = () => {
    if (value === 'X') {
      return <img src={xImage} alt="X" className="daedric-symbol" />;
    } else if (value === 'O') {
      return <img src={oImage} alt="O" className="daedric-symbol" />;
    }
    return null;
  };

  return (
    <button className="square" onClick={onClick}>
      {renderContent()}
    </button>
  );
};

export default Square;
