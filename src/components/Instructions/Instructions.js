import React from 'react';
import { Link } from 'react-router-dom';
import './Instructions.css';

let Instructions = () => {
    return (
        <div className="container instructions">
            <h5 className="instructions-title text-center">Star Wars Clicky Game</h5>
            <div className="instructions-text">
                <p>To Play: Click on any character on the screen.  The characters will re-jumble and
                            show up in new places.  Every time you click on a new character, your score goes up by one.  Keep on clicking until you click all twelve characters to win!</p>
                <p>Be careful though... if you click a character twice, you lose! Your high score is shown along with the current game score, in the upper
                            right corner of the screen.</p>
                <p>Happy clicking!!!</p>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/game" className="btn show-button-always">Play the Game!</Link>
            </div>
        </div>
    );
}

export default Instructions;