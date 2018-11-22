import React, { Component } from 'react';

class Tapahtuma extends Component {


    render() {
        var tapahtumalista = this.props.lista.map(function(tapahtuma) {

           return (
            <div> 
               <div>{tapahtuma.tapahtuma_tyyppi}</div>
               <div>{tapahtuma.tapahtuman_nimi}</div>
               <div>{tapahtuma.aika}</div>
               <div>{tapahtuma.osoite}</div>
               <div>{tapahtuma.in}</div>
            </div>
           ) 
        })
        console.log(tapahtumalista);
        return (
            <div>
                {tapahtumalista}
            </div>);
    }
}

export default Tapahtuma;

