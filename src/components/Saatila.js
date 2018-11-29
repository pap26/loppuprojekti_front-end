import React, { Component } from 'react';
import {haeLokaatio} from './../ServiceClient'

class Saatila extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saatila: [],
            isLoaded: false,
            lat: 60.31, 
            lng: 25.06, 
        }
    }
    componentDidMount= () =>  {
        //Tässä kohtaa Tapahtumalistasta tuodaan propseina lokaatio (esim. Paloheinän TN, Helsinki) ja  
        //viedään tieto serviseClientissä olevaan haeLokaatio-funktioon. Sieltä saamme paikan koordinaatit (lat ja lng),
        //jotka asetetaan stateen. -pz
        haeLokaatio(this.props.saalokaatio, (lat, lng) => {
            this.setState({lat:lat, lng:lng});
            console.log("Haettu state", this.state);
            console.log("Haettu lat ja lng", {lat:lat, lng:lng});
      
        //Alla OpenWeather-apin osoitteeseen tuodaan yllä haetut lat ja lng. Osoitteella haetaan säätila ja asetetaan se saatila-tauluun muuttujaksi
        let alkuUrl= 'http://api.openweathermap.org/data/2.5/weather?'
        let loppuurl='&units=metric&lang=fi&appid=6800f0cca55ac2553238c23a0503174f'
        let laturl = 'lat='+ lat
        console.log("lati ennen urlin asetusta", laturl)
        let lngurl = '&lon='+ lng
        console.log("longi ennen urlin asetusta", lngurl)
        fetch(alkuUrl + laturl + lngurl + loppuurl)
            .then (res => res.json()) 
            .then (data=>{
                this.setState({
                    isLoaded: true,
                    saatila: data,
                })
            });
        });
            
    };
    render() {
        //console.log('säätila, tuleeko this.state renderiin?', this.state)
        var saatila = this.state.saatila
        var isLoaded = this.state.isLoaded
        //console.log('tuleeko säätila läpi?', saatila)
      
    
        if (!isLoaded) {
            return <div>Pieni hetki, haemme tietoja...</div>;
        }
        else {
        // console.log('render4', this.state.saatila.weather[0].icon)
        var iconcode = this.state.saatila.weather[0].icon;
        console.log('ikonimuuttujalla', iconcode)
        console.log('ikoni', this.state.saatila.weather[0].icon)

        //alla olevalla osoitteella haetaan weathericon-kuva -pz
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            return ( 
                <div className="flex">
                    <img className="weather" src= {iconurl} alt="Säätilan kuva"/>
                    <div className="lampotila">{this.state.saatila.main.temp} 
                    </div>            
                </div>
            );   

    }
}
}

export default Saatila;