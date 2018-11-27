import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {haeLokaatio} from './../ServiceClient'

class Googlekartta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 60.316235, 
            lng: 25.065618,  
        }
     
    }

    componentDidMount = () => {
         //Tässä kohtaa Tapahtumalistasta tuodaan propseina lokaatio (esim. Paloheinän TN, Helsinki) ja  
        //viedään tieto serviseClientissä olevaan haeLokaatio-funktioon. Sieltä saamme paikan koordinaatit (lat ja lng),
        //jotka asetetaan stateen. -pz
        haeLokaatio(this.props.lokaatio, (lat, lng) => {
            this.setState({lat:lat, lng:lng});
            console.log("Haettu state", this.state);
            console.log("Haettu lat ja lng", {lat:lat, lng:lng});
        });
    }

    render() {
        const style = {
            width: '405px',
            height: '300px'
          }
          
        
        console.log("Kartta-renderin tuloste", this.state);
        return (
            <div className="google_map">    
           <Map 
                google={this.props.google} 
                style={style}
                center={this.state} 
                zoom={15}>
                    {/* Marker on kartassa näkyvä osoitinmerkki */}
                    <Marker position={this.state} />
            </Map>
         </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB1WCsY3gI-ne0NNSftu5Srgl-cWzNcV8U")
  })(Googlekartta)