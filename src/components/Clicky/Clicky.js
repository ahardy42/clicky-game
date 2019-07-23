import React from 'react';
import './Clicky.css';

class Clicky extends React.Component {
    render() {
        return (
            <div className="card bg-dark text-white animated bounce">
                <img className="card-img" src="http://via.placeholder.com/360x360" alt="Clicky" />
                <div className="card-img-overlay">
                </div>
            </div>
        );
    }
}

export default Clicky;