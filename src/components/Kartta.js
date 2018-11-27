import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react'; 

class Kartta extends Component {

    render() {
        const style = {
            width: '405px',
            height: '300px'
          }
        return (

            <div className="google_map">
            <Map 
            google={this.props.google} 
            style={style}
            initialCenter={{
              lat:60.316235,
              lng:25.065618
            }}
            zoom={14}
            onClick={this.onMapClicked}
            >
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        {/* </InfoWindow> */} */}
      </Map>
      </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB1WCsY3gI-ne0NNSftu5Srgl-cWzNcV8U")
  })(Kartta)