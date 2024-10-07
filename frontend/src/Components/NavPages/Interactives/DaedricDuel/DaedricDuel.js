import './DaedricDuel.css';
import DaedricDuelDesc from './DaedricDuel-Desc.jsx';
import { useState } from "react";
import Board from "./GameLogic/Board.js";

function DaedricDuel() {
    return (
        <div className="daedricduel-container">
            <div className="daedricduel-header">
                <h1 className="daedricduel-title">Daedric Duel</h1>
                <body className="daedricduel-body"><DaedricDuelDesc /></body>
            </div>
            <div className="daedricduel-board">
                {/* This is the code for the Daedric Duel game. */}
                <Board />
            </div>
        </div>
    );
}

export default DaedricDuel;