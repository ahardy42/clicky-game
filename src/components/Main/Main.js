import React from 'react';
import './Main.css';
import Clicky from '../Clicky/Clicky';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.clickys.map(clicky => {
                    return <Clicky key={clicky.id} clicky={clicky}/>
                })}
            </div>
        );
    }
}

export default Main;