import React from 'react';
import './Nav.css';
import ScoreCard from './ScoreCard';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1">May the Click Be With You...</span>
                <ScoreCard score={this.props.score} highScore={this.props.highScore} scoreClassNames={this.props.scoreClassNames} resetScoreAnimation={this.props.resetScoreAnimation}/>
            </nav>
        );
    }
}

export default Nav;