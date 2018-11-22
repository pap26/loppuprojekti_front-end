import React, { Component } from 'react';
import Navigation from './Navigation.js'
import TapahtumaSivu from './TapahtumaSivu.js';


class Etusivu extends Component {


    render() {
        return (
            <div>
                <Navigation />
                <TapahtumaSivu />


            </div>
        );
    }
}

export default Etusivu;