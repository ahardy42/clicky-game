import React from 'react';
import './Clicky.css';
import { classHelpers as css } from '../../utility/classHelpers';

class Clicky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            className: ["card", "text-white", "animated", "flipInX", `showClicky_${props.clicky.id}`],
            style: { backgroundColor: this.props.clicky.color }
        }
        this.gameOver = this.gameOver.bind(this);
        this.setScore = this.setScore.bind(this);
        this.animationClick = this.animationClick.bind(this);
        this.animationEnd = this.animationEnd.bind(this);
    }
    animationClick() {
        this.setState((prevState) => {
            if (prevState.isClicked) {
                return { isClicked: false, className: css.addAnimation(prevState.className, ["shake"]) }
            } else {
                return { isClicked: true, className: css.addAnimation(prevState.className, ["tada"]) }
            }
        });
    }
    animationEnd(event) {
        let name = event.animationName;
        if (name === "shake" || name === "tada") {
            // if this is the result of a click action on the clicky...
            this.setState((prevState) => {
                return {className: css.removeAnimation(prevState.className, [name])};
            }, () => {
                let isClicked = this.state.isClicked;
                isClicked ? this.setScore() : this.gameOver();
                this.props.animateScore();
            });
        } else {
            // if this is just the result of initial animation don't run the setScore or gameOver functions
            this.setState((prevState) => {
                return {className: css.removeAnimation(prevState.className, ["flipInX", `showClicky_${this.props.clicky.id}`])};
            });
        }
    }
    gameOver() {
        return this.props.gameOver();
    }
    setScore() {
        this.props.setScore();
    }
    render() {
        return (
            <div className={this.state.className.join(" ")} onClick={this.animationClick} style={this.state.style} onAnimationEnd={this.animationEnd}>
                <img className="card-img" src={this.props.clicky.img} alt="Clicky" />
                <div className="card-img-overlay">
                </div>
            </div>
        );
    }
}

export default Clicky;