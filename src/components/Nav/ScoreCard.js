import React from 'react';
import './Nav.css';

// renders a scorecard using information from props.score and props.highScore
class ScoreCard extends React.Component {
    render() {
        return (
            <ul className="nav justify-content-end flex-column">
                <li className={this.props.scoreClassNames.join(" ")}>
                    <p>high score: {this.props.highScore}</p>
                </li>
                <li className={this.props.scoreClassNames.join(" ")}>
                <p>current score: {this.props.score}</p>
                </li>
            </ul>
        );
    }
}

export default ScoreCard