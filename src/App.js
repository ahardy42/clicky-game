import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Entry from './components/Entry/Entry';
import Main from './components/Main/Main';
import clickys from './clickys.json';
import {classHelpers as css} from './utility/classHelpers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickys: clickys,
            score: 0,
            highScore: 0,
            scoreClassNames: ["nav-item", "text-success", "animated"]
        }
        this.setScore = this.setScore.bind(this);
        this.setHighScore = this.setHighScore.bind(this);
        this.setRandomPosition = this.setRandomPosition.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.mainPage = this.mainPage.bind(this);
        this.entryPage = this.entryPage.bind(this);
        this.animateScore = this.animateScore.bind(this);
        this.resetScoreAnimation = this.resetScoreAnimation.bind(this);
    }
    animateScore() {
        this.setState({scoreClassNames: css.addAnimation(this.state.scoreClassNames, ["rubberBand"])})
    }
    resetScoreAnimation() {
        this.setState({scoreClassNames: css.removeAnimation(this.state.scoreClassNames, ["rubberBand"])})
    }
    setScore() {
        this.setState((prevState, props) => {
            return {score: prevState.score + 1}
        }, () => {
            this.setRandomPosition();
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
                <Router>
                    <Nav score={this.state.score} highScore={this.state.highScore} scoreClassNames={this.state.scoreClassNames} resetScoreAnimation={this.resetScoreAnimation}/>
                    <Switch>
                        <Route exact path="/" render={this.entryPage} />
                        <Route exact path="/game" render={this.mainPage} />
                    </Switch>
                </Router>
            </>
        )
    }
    mainPage(props) {
        return <Main clickys={this.state.clickys} setScore={this.setScore} gameOver={this.gameOver} animateScore={this.animateScore} {...props}/>
    }
    entryPage(props) {
        return <Entry {...props} />
    }
}

export default App;

