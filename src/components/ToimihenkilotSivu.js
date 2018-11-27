import React, { Component } from 'react';
import Toimihenkilot from './Toimihenkilot.js';
import Navigation from './Navigation.js';



class ToimihenkilotSivu extends Component {


    render() {
 
        return (
            <div>
                <div className="tausta">
                <Navigation />
                <div className="pelaajat_bg">
                <Toimihenkilot />
                </div>
                </div>
            </div>
        );
    }
}


export default ToimihenkilotSivu;