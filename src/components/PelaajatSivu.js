import React, { Component } from 'react';
import Navigation from './Navigation';
import Pelaajalista from './Pelaajalista';

class PelaajatSivu extends Component {

    render() {
        return (
            <div>
            <div className="tausta">
            <Navigation />
            <div className="pelaajat_bg">
            <Pelaajalista lista={this.props.pelaajalista}/>
            </div>
        
            </div>
        </div>)
    }
}
export default PelaajatSivu;