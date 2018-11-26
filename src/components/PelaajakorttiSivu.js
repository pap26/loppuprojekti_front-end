import React, { Component } from 'react';
import Navigation from './Navigation';
import Pelaajakortti from './Pelaajakortti.js';

class PelaajakorttiSivu extends Component {

    render() {
        return (
            <div>
            <div className="tausta">
            <Navigation />
            <div className="pelaajat_bg">
            <Pelaajakortti />
            </div>
        
            </div>
        </div>)
    }
}
export default PelaajakorttiSivu;