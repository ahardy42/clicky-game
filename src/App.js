import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import clickys from './clickys.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickys: clickys,
            score: 0,
            highScore: 0
        }
        this.setScore = this.setScore.bind(this);
        this.setHighScore = this.setHighScore.bind(this);
        this.setRandomPosition = this.setRandomPosition.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }
    setScore() {
        this.setState((prevState, props) => {
            this.setRandomPosition();
            return {score: prevState.score + 1}
        });
    }
    setHighScore() {
        this.setState((prevState, props) => {
            if (prevState.score > prevState.highScore) {
                return {highScore: prevState.score}
            } else {
                return;
            }
        });
    }
    setRandomPosition() {
        let array = this.state.clickys;
        // implimentation of the Fischer-Yates shuffle
        for (let i = array.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({
            clickys: array
        });
    }
    gameOver() {
        this.setRandomPosition();
        this.setHighScore();
        this.setState({
            score: 0
        });
    }
    render() {
        return (
            <>
                <Nav score={this.state.score} highScore={this.state.highScore}/>
                <Main clickys={this.state.clickys} setScore={this.setScore} gameOver={this.gameOver}/>
            </>
        )
    }
}

export default App;

