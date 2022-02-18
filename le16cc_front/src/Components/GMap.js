import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { useLocation, Link } from "react-router-dom";
import NZButton from './NewZoneButton';
import Pin from '../IMG/Pin.png'
import addImage from '../IMG/addImage.png'
import './GMap.css'
import { marker } from 'leaflet';



const AnyReactComponent = ({ text }) => <div><img className="Pin" src={Pin} />{text}</div>;

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
          position: { lat: 37.778519, lng: -122.40564 },
          id: 0
        }
      ],
      showingInfoWindow: false,
      activeMarker: {},
      activeMarkerImg: {},
      activeMarkerDetails: {},
      userid: {},
      selectedPlace: {},
      markerid: "",
      center: {
        lat: 48.8639907837,
        lng: 2.27723288536,

      },
    };
    /*this.onClick = this.onClick.bind(this);*/
  }

  componentDidMount() {
    fetch('https://api.le16cc.fr/v1/markers')
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        console.log('Success: ', response)
        console.log(response.rows)
        var lat = response.rows[0].latitude
        var lng = response.rows[0].longitude
        var id = response.rows[0].id
        console.log(lat, lng, id)
        this.setState({
          markers: [
            {
              title: "",
              name: "",
              position: { lat, lng },
              id: id
            }
          ]
        })
        this.MarkersMaping(response.rows)
      });
  }

  MarkersMaping(data) {
    console.log('data : ', data)
    return (
      data.map((data, i) => {
        var lat = data.latitude
        var lng = data.longitude
        var id = data.id
        this.setState(previousState => {
          return {
            markers: [
              ...previousState.markers,
              {
                title: "",
                name: i,
                position: { lat, lng },
                id: id
              }
            ]
          };
        });
      })
    )
  }

  onMarkerClick = (props, marker, e) => {
    this.getMarkerImage(marker.id)
    this.getMarkerDetails(marker.id)
    this.getUserId(marker.id)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      markerid: marker.id
    });
    console.log('marker :', props)
  };

  getMarkerImage(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    };
    fetch('https://api.le16cc.fr/v1/MarkerImages', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => {
        console.log('markerimage :', data)
        this.setState({ activeMarkerImg: 'https://api.le16cc.fr/' + data.rows[0].url })
      })
  }

  getMarkerDetails(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    };
    fetch('https://api.le16cc.fr/v1/MarkerDetails', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => {
        console.log('markerdetails :', data)
        this.setState({ activeMarkerDetails: data.rows[0] })
      })
  }

  getUserId(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    };
    fetch('https://api.le16cc.fr/v1/UserId', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => {
        console.log('userid :', data)
        this.setState({ userid: data.rows[0] })
      })
  }


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

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
    fetch('https://localhost:8080/v1/new-marker', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {

    const triangleCoords = [
      { lat: 48.880387998705885, lng: 2.25846899980789 },
      { lat: 48.87796973818341, lng: 2.2774924562358754 },
      { lat: 48.878621457010986, lng: 2.27988341138076 },
      { lat: 48.87363611733889, lng: 2.2951269124457276 },
      { lat: 48.873328555931764, lng: 2.295468470845096 },
      { lat: 48.87251022301, lng: 2.2961967684335858 },
      { lat: 48.872323141193185, lng: 2.2963597252038013 },
      { lat: 48.87092125527352, lng: 2.29753030610338 },
      { lat: 48.869677125702495, lng: 2.298238723902579 },
      { lat: 48.86855351513266, lng: 2.2989290168173504 },
      { lat: 48.867441206880976, lng: 2.2992005310333856 },
      { lat: 48.864985344440086, lng: 2.2999458223045144 },
      { lat: 48.86453277369524, lng: 2.3016610862741915 },
      { lat: 48.86423265844495, lng: 2.3015560584670705 },
      { lat: 48.86323049319275, lng: 2.2963817860733564 },
      { lat: 48.8625359375569, lng: 2.293967601604443 },
      { lat: 48.85660565559522, lng: 2.286664913098737 },
      { lat: 48.84948603484691, lng: 2.2770835716859295 },
      { lat: 48.83407270001898, lng: 2.2619056754085736 },
      { lat: 48.834838689340565, lng: 2.2551926104264544 },
      { lat: 48.83885292932251, lng: 2.251728223548639 },
      { lat: 48.842534345828184, lng: 2.2512951752026575 },
      { lat: 48.84291434760853, lng: 2.251150825753997 },
      { lat: 48.845408037746644, lng: 2.2524499707919414 },
      { lat: 48.84557427936224, lng: 2.250573427932384 },
      { lat: 48.84759288332908, lng: 2.242417683982789 },
      { lat: 48.84977763356626, lng: 2.2398193938308264 },
      { lat: 48.8501494030508, lng: 2.23870140547865 },
      { lat: 48.85283269581938, lng: 2.2262512655316846 },
      { lat: 48.8535925402098, lng: 2.2241581985261076 },
      { lat: 48.856441853997445, lng: 2.2244829847835184 },
      { lat: 48.86536865378795, lng: 2.228380419929165 },
      { lat: 48.86909559627586, lng: 2.231808719334851 },
      { lat: 48.86916680903471, lng: 2.231808719334851 },
      { lat: 48.87099456857781, lng: 2.237185736372144 },
      { lat: 48.87203897257752, lng: 2.2405418610535 },
      { lat: 48.873676744039564, lng: 2.2431040637672237 },
      { lat: 48.8764062441487, lng: 2.2457745287106015 }
    ];
    var points = [
      { lat: 48.886624244727045, lng: 2.27029340479112 },
      { lat: 48.86712346353627, lng: 2.2199030871711916 },
      { lat: 48.82959238798714, lng: 2.2513362756543622 },
      { lat: 48.8558244519535, lng: 2.3067494223618077 },

      //48.88332136851954, 2.27029340479112
      //48.8558244519535, 2.3067494223618077
      //48.86712346353627, 2.2199030871711916
      //48.82959238798714, 2.2513362756543622
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div style={{ height: '100vh', width: '100%', position: 'fixed', top: '0' }}>
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
              id={marker.id}
              onClick={this.onMarkerClick}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            img={this.state.activeMarkerImg}
            visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.userid.username}</h3>
              <img
                style={{
                  height: '100px',
                  width: '100px'
                }}
                src={this.state.activeMarkerImg} />
              <p>difficulté : {this.state.activeMarkerDetails.difficulty}</p>
              <p>Types de déchets : 3</p>
              <p>{this.state.activeMarker.id}</p>
              <button><a href={`/ZoneInfo/${this.state.markerid}`}>
                View
              </a></button>
            </div>
          </InfoWindow>
          <Polygon
            paths={triangleCoords}
            strokeColor="#74DB84"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="lightblue"
            fillOpacity={0.35} />
        </Map>
      </div >
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw")
})(SimpleMap);