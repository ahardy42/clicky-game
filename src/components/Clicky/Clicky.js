import React from 'react';
import './Clicky.css';
import { classHelpers as css } from '../../utility/classHelpers';

class Clicky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            className: "card bg-dark text-white animated"
        }
        this.handleClick = this.handleClick.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.setScore = this.setScore.bind(this);
        this.animationClick = this.animationClick.bind(this);
    }
    animationClick() {
        this.setState((prevState) => {
            if (prevState.isClicked) {
                return { isClicked: false, className: css.incorrectAnswer(prevState.className) }
            } else {
                return { isClicked: true, className: css.correctAnswer(prevState.className) }
            }
        }, () => {
            setTimeout(() => {
                let isClicked = this.state.isClicked;
                isClicked ? this.setScore() : this.gameOver();
                this.setState({
                    className: "card bg-dark text-white animated"
                })
            }, 1000);
        });
    }
    gameOver() {
        return this.props.gameOver();
    }
    setScore() {
        return this.props.setScore();
    }
    render() {
        return (
            <div className={this.state.className} onClick={this.animationClick}>
                <img className="card-img" src={this.props.clicky.img || "http://via.placeholder.com/360x360"} alt="Clicky" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{this.props.clicky.name}</h5>
                </div>
            </div>
        );
    }
}

export default Clicky;