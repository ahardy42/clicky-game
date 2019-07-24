import React from 'react';
import './Main.css';
import Clicky from '../Clicky/Clicky';

class Main extends React.Component {
    render() {
        return (
            <div className="container d-flex flex-wrap justify-content-center">
                {this.props.clickys.map(clicky => {
                    return <Clicky key={clicky.id} clicky={clicky} setScore={this.props.setScore} gameOver={this.props.gameOver} />
                })}
            </div>
        );
    }
}

export default Main;