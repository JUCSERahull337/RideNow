import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    return (
        <div>
            <h1>See On Map</h1>
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
            </Map>

        </div>
    );
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCUUPI8ucsLwGo-pP5Xk8Nk3JKGkqMkZ8M')
  })(GoogleMap);