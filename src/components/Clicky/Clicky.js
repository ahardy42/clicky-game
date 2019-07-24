import React from 'react';
import './Clicky.css';

class Clicky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState, props) => {
            if (prevState.isClicked) {
                props.gameOver();
                return {isClicked: false}
            } else {
                props.setScore();
                return {isClicked: true}
            }
        });
    }
    render() {
        return (
            <div className="card bg-dark text-white animated bounce" onClick={this.handleClick}>
                <img className="card-img" src={this.props.clicky.img || "http://via.placeholder.com/360x360"} alt="Clicky" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{this.props.clicky.name}</h5>
                </div>
            </div>
        );
    }
}

export default Clicky;