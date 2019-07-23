import React from 'react';
import './Clicky.css';

class Clicky extends React.Component {
    render() {
        return (
            <div class="card bg-dark text-white">
                <img class="card-img" src="http://via.placeholder.com/360x360" alt="Clicky" />
                <div class="card-img-overlay">
                </div>
            </div>
        );
    }
}

export default Clicky;