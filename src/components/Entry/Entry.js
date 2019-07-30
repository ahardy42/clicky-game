import React from 'react';
import { Link } from 'react-router-dom';
import './Entry.css';

class Entry extends React.Component {
    render() {
        return (
            <>
                <div className="container star-wars">
                    <div className="fade"></div>
                    <div className="crawl">
                        <h5 className="title text-center">Star Wars Clicky Game</h5>
                        <div className="text">
                            <h5 className="text-center">Sharp your memory is??</h5>
                            <p>To Play: Click on any character on the screen.  The characters will re-jumble and
                            show up in new places.  Every time you click on a new character, your score goes up by one.  Keep on clicking until you click all twelve characters to win!</p>
                            <p>Be careful though... if you click a character twice, you lose! Your high score is shown along with the current game score, in the upper
                            right corner of the screen.</p>
                            <p>Happy clicking!!!</p>
                        </div>
                    </div>
                </div>
                <Link to="/game" className="btn show-button">Play the Game!</Link>
            </>
        );
    }
}

export default Entry;