import React, { Component } from 'react';
import Tapahtuma from './Tapahtuma.js';

let duubiduu = [
    {id:1, 
    tapahtuma_tyyppi: "matsi", 
    tapahtuman_nimi: "Harjoituspeli KOPSE valkoinen - FC Viikingit", 
    aika: "17:30-19:30", 
    osoite: "Havukoski TN, Koivukylänväylä 32, 01360 Vantaa",
    in: true
    }];

class Tapahtumat extends Component {

    render() {
        return (
            <div>
                <div>
                <Tapahtuma lista={duubiduu}/>
                </div>
            </div>
        );
    }
}



export default Tapahtumat;