import React, { Component } from 'react';
import Joulukalenteri from './Joulukalenteri';
import Navigation from './Navigation';

class Kalenteri extends Component {

    render() {
        return (
            <div>
                <Navigation />

                <div className="tapahtuma_bg">
                    <h3 className="center">Joulukalenteri</h3>
                    <Joulukalenteri />
                </div>
            </div>
        );
    }
}

export default Kalenteri;