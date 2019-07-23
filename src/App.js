import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

const clickys = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickys: clickys
        }
    }
    render() {
        return (
            <>
                <Nav />
                <Main clickys={this.state.clickys}/>
            </>
        )
    }
}

export default App;

