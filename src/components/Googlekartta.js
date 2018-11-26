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
          
        
        console.log("renderin tuloste", this.state);
        return (
            <div className="google_map">
           
            
        <Map 
            google={this.props.google} 
            style={style}
            center={this.state} 
            zoom={14}>
            <Marker
            position={this.state} />
        </Map>
        </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB1WCsY3gI-ne0NNSftu5Srgl-cWzNcV8U")
  })(Googlekartta)