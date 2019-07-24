import React from 'react';
import {Link} from 'react-router-dom';
import './Entry.css';

class Entry extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card w-100">
                    <h5 className="card-header text-center">Star Wars Clicky Game</h5>
                    <div className="card-body">
                        <h5 className="card-title">Sharp your memory is??</h5>
                        <p className="card-text">To Play: Click on any character on the screen.  The characters will re-jumble and
                        show up in new places.  Every time you click on a new character, your score goes up by one.  Keep on clicking until you click all twelve characters to win!</p>
                        <p className="card-text">Be careful though... if you click a character twice, you lose! Your high score is shown along with the current game score, in the upper
                        right corner of the screen.</p>
                        <p className="card-text">Happy clicking!!!</p>
                        <Link to="/game" className="btn btn-primary">Play the Game!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;