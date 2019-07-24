import React from 'react';
import './Clicky.css';
import { classHelpers as css } from '../../utility/classHelpers';

class Clicky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            className: "card text-white animated",
            style: {backgroundColor: this.props.clicky.color}
        }
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
                    className: "card text-white animated"
                })
            }, 1100);
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
            <div className={this.state.className} onClick={this.animationClick} style={this.state.style}>
                <img className="card-img" src={this.props.clicky.img || "http://via.placeholder.com/360x360"} alt="Clicky" />
                <div className="card-img-overlay">
                </div>
            </div>
        );
    }
}

export default Clicky;