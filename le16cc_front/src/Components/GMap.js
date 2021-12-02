import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import NZButton from './NewZoneButton';
import Pin from '../IMG/Pin.png'
import './GMap.css'


const AnyReactComponent = ({ text }) => <div><img className="Pin"src={Pin}/>{text}</div>;

/*class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8639907837,
      lng: 2.27723288536
    },
    zoom: 14
  };
  constructor(props) {
    super(props);
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
      <div style={{ height: '100vh', width: '100%', position: 'fixed', top:'0', zIndex:'-1000'}}>
        <Map
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
        </Map>
        <NZButton />
      </div>
    );
  }
}

export default SimpleMap;*/

class SimpleMap extends Component {
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
    /*this.onClick = this.onClick.bind(this);*/
  }

  componentDidMount() {
    fetch('http://localhost:8080/markers')
        .then(res => res.json())

        .catch(error => console.error('Error: ', error))

        .then(response => {
            console.log('Success: ', response)
            console.log(response.rows)
            var lat = response.rows[0].latitude
            var lng = response.rows[0].longitude
            console.log(lat, lng)
            /*this.setState({
                markers: [
                  {
                    title: "",
                    name: "",
                    position:{ lat, lng}
                  }
                ]
            })*/
            this.MarkersMaping(response.rows)
        });
}

MarkersMaping(data){
  return (
        data.map((data, i) => {
            var lat = data.latitude
            var lng = data.longitude
            this.setState(previousState => {
              return {
                markers: [
                  ...previousState.markers,
                  {
                    title: "",
                    name: "",
                    position: { lat, lng }
                  }
                ]
              };
            });
        })
        
  )
}

 /* onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log('lat :', lat)
    console.log('long :', lng)

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng }
          }
        ]
      };
    });
    this.CreatContact(lat, lng)
  }*/

  CreatContact(lat, lng) {

    console.log(lat, lng)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lat: lat,
        lng: lng
      })
    };
    fetch('http://localhost:8080/v1/new-marker', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })

  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', position: 'fixed', top:'0'}}>
        <Map
          google={this.props.google}
          
          className={"map"}
          initialCenter={this.state.center}
          zoom={14}
          /*onClick={this.onClick}*/
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
})(SimpleMap);