import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import NZButton from './NewZoneButton';
import Pin from '../IMG/Pin.png'
import './GMap.css'


const AnyReactComponent = ({ text }) => <div><img className="Pin"src={Pin}/>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8639907837,
      lng: 2.27723288536
    },
    zoom: 14
  };
  constructor() {
    super();
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
}


onClick(t, map, coord) {
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();

  console.log('lat', lat)
  console.log('lng', lng)
}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', position: 'fixed', top:'0'}}>
        <GoogleMapReact
        google={this.props.google}
          bootstrapURLKeys={{ key: "AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.onClick}
        >
          <AnyReactComponent
            lat={48.8639907837}
            lng={2.27723288536}
            text="Mairie"
          />
        </GoogleMapReact>
        <NZButton />
      </div>
    );
  }
}

export default SimpleMap;