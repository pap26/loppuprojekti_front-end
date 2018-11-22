import React, { Component } from 'react';
import Tapahtuma from './Tapahtuma.js';
import Instagram from './Instagram.js';

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

class Tapahtumat extends Component {

    render() {
        return (
            <div>
                <div className="tapahtuma_bg">
                <Tapahtuma lista={tapahtumadata}/>
                </div>
                <div className="instagam">
                <Instagram />
                </div>
            </div>
        );
    }
}



export default Tapahtumat;