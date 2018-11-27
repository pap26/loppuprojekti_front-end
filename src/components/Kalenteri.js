import React, { Component } from 'react';
import Joulukalenteri from './Joulukalenteri';
import Navigation from './Navigation';

class Kalenteri extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Joulukalenteri />
            </div>
        );
    }
}

export default Kalenteri;