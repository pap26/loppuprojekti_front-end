import React, { Component } from 'react';
import Tapahtumat from './Tapahtumat.js';
import Navigation from './Navigation.js';


let tapahtumadata = [
    {id:1, 
    summary: "matsi : Harjoituspeli KOPSE valkoinen - FC Viikingit", 
    //tapahtuman_nimi: "Harjoituspeli KOPSE valkoinen - FC Viikingit", 
    start: { 
        dateTime: {
        value: 1542812400000,
        dateOnly: false,
        timeZoneShift: 120
        },
        timeZone: "Europe/Helsinki"
        },
    end: {
        dateTime: {
        value: 1542816000000,
        dateOnly: false,
        timeZoneShift: 120
        },
        timeZone: "Europe/Helsinki"
        },

    dateTime: {
        value: 1542812400000,
        timeZoneShift: 120
    },
    location: "Havukoski TN, Koivukylänväylä 32, 01360 Vantaa",
    in: true
    }];

class TapahtumatSivu extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="tapahtuma_bg">
                <Tapahtumat listakaikki={tapahtumadata}/>
                </div>
        
            </div>
        );
    }
}

export default TapahtumatSivu;