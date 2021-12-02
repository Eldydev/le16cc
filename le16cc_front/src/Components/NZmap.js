import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//const AnyReactComponent = ({ text }) => <div><img className="Pin"src={Pin}/>{text}</div>;

class NZMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 37.778519, lng: -122.40564 }
        }
      ],
      center: {
        lat: 48.8639907837,
        lng: 2.27723288536
      },
    };
  }

  render() {
    return (
      <div style={{ height: '400px', width: '100%', position: "relative", border: "solid 2px grey"}}>
        <Map
          google={this.props.google}
          initialCenter={this.state.center}
          zoom={14}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw")
})(NZMap);