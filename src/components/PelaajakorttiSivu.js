import React, { Component } from 'react';
import Navigation from './Navigation';
import Pelaajakortti from './Pelaajakortti.js';

class PelaajakorttiSivu extends Component {
    render() {
        console.log("Pelaajakorttisivu.render")
        return (
            <div>
            <div className="tausta">
            <Navigation />
            <div className="pelaajat_bg">
            <Pelaajakortti {...this.props}/>
            </div>
        
            </div>
        </div>)
    }
}
export default PelaajakorttiSivu;