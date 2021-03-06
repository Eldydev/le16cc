import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, MapProps } from 'google-maps-react';
import { useLocation, Link } from "react-router-dom";
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
import NZmap from './NZmap';
import NZinput from './Nzinput';
import "./NewZone.css"

import ProgressBar from "./progressbar";

const testData = [
    { bgcolor: "#6a1b9a", completed: 0, step: 1 },
];

class NewTrash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: {
                title: "Vous etes ici",
                name: "SOMA",
                position: { lat: 48.8639907837, lng: 2.27723288536 }
            },
            center: {
                lat: 48.8639907837,
                lng: 2.27723288536
            },
            navlat: 0,
            navlng: 0,
            lat: 0,
            lng: 0,
            celat: 48.8639907837,
            celng: 2.27723288536,
            nrue: "",
            rue: "",
            ville: "",
            cp: ""
        };
        this.handleAdressChange = this.handleAdressChange.bind(this);
    }



    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('lat', position.coords.latitude)
            console.log('lng', position.coords.longitude)
            this.setState({ navlat: position.coords.latitude });
            this.setState({ navlng: position.coords.longitude });
        });
    }

    handleAdressChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("value ", value)
        this.setState({
            [name]: value
        });
        this.GeolocAdress(name, value)
    }

    GeolocAdress(name, value) {

        console.log("adress update ", name, " ", value)
        if (name === "nrue") {
            var nrue = value
        }
        else {
            var nrue = this.state.nrue
        }
        if (name === "rue") {
            var rue = value
        }
        else {
            var rue = this.state.rue
        }
        if (name === "ville") {
            var ville = value
        }
        else {
            var ville = this.state.ville
        }
        if (name === "cp") {
            var cp = value
        }
        else {
            var cp = this.state.cp
        }
        console.log("adresse ", nrue, rue, ville, cp)



        Geocode.setApiKey("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
        Geocode.fromAddress("'" + nrue + " " + rue + " " + cp + " " + ville + "'").then(
            (response) => {
                console.log('response', response.results[0].geometry.location);
                this.setState({
                    lat: response.results[0].geometry.location.lat,
                    lng: response.results[0].geometry.location.lng,
                    celat: response.results[0].geometry.location.lat,
                    celng: response.results[0].geometry.location.lng,
                    markers: { position: { lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng } }
                })
            },
            (error) => {
                console.error(error);
            }
        );
    }

    Geoloc() {
        var lat = this.state.navlat
        var lng = this.state.navlng
        console.log('lat', lat, 'lng', lng)

        this.setState({
            lat: lat,
            lng: lng,
            celat: lat,
            celng: lng,
            markers: { position: { lat: lat, lng: lng } }
        })

        Geocode.setApiKey("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                const address = response.results[0].formatted_address;
                console.log(address);
                this.setState({
                    nrue: response.results[0].address_components[0].long_name,
                    rue: response.results[0].address_components[1].long_name,
                    ville: response.results[0].address_components[2].long_name,
                    cp: response.results[0].address_components[6].long_name,
                })
            },
            (error) => {
                console.error(error);
            }
        );
    }

    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState({
            lat: lat,
            lng: lng,
            celat: lat,
            celng: lng,
            markers: { position: { lat: lat, lng: lng } }
        })
        Geocode.setApiKey("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                const address = response.results[0].formatted_address;
                console.log(address);
                this.setState({
                    nrue: response.results[0].address_components[0].long_name,
                    rue: response.results[0].address_components[1].long_name,
                    ville: response.results[0].address_components[2].long_name,
                    cp: response.results[0].address_components[6].long_name,
                })
            },
            (error) => {
                console.error(error);
            }
        );
    };

    /* NewMarker() {
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 lat: this.state.lat,
                 lng: this.state.lng
             })
         };
         fetch('http://localhost:8080/v1/new-marker', requestOptions)
             .then(console.log('body: ', requestOptions))
             .then(response => response.json())
             .then(data => {
                 console.log(data)
                 if (data.result == 'success') {
                     console.log('New marker added')
                 }
             })
     }*/


    render() {
        console.log('center', this.state.center.lat, this.state.center.lng)
        console.log(this.state.markers.position.lat)
        return (
            <div>
                <p>J'AJOUTE UN POINT DE COLLECTE</p>
                <div style={{
                    width: "40%",
                    marginLeft: "30%"
                }}>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} step={item.step} />
                    ))}
                </div>
                <div
                    id='validCpMessage'
                    style={{
                        width: "40%",
                        marginLeft: "30%",
                        color: this.state.msgcolor
                    }}>
                    <p>Veuillez choisir une zone dans le 16eme arrondissement ( CP : 75016 ou 75116 ) </p>
                </div>


                <div id="Newzone">
                    <div id="mapbox">
                        <p id="geolocbutton" onClick={(e) => this.Geoloc()}
                            style={{
                                width: "80%",
                                marginTop: "30px",
                                marginLeft: "10%",
                                height: "30px",
                                borderRadius: "25px",
                                backgroundColor: "white",
                                textAlign: "center",
                                paddingTop: "10px",
                                backgroundImage: "linear-gradient(to top, rgba(116,219,132,0.3), #74DB84)",
                                color: "black"
                            }}
                        >Utiliser ma localisation actuelle</p>
                        <div style={{ height: '400px', width: '100%', position: "relative" }}>
                            <Map
                                google={this.props.google}
                                center={{
                                    lat: this.state.celat,
                                    lng: this.state.celng
                                }}
                                zoom={15}
                                yesIWantToUseGoogleMapApiInternals="true"
                            >
                                <Marker
                                    draggable={true}
                                    title={this.state.markers.title}
                                    name={this.state.markers.name}
                                    position={this.state.markers.position}
                                    onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
                                />
                            </Map>
                        </div>
                        <div className="gpsbox">
                            <div style={{
                                width: "40%",
                                marginRight: "40px"
                            }}>
                                <p>Lattitude</p>
                                <input style={{
                                    width: "100%"
                                }} type="text" value={this.state.lat} />
                            </div>
                            <div style={{
                                width: "40%"
                            }}>
                                <p>Longitude</p>
                                <input style={{
                                    width: "100%"
                                }}
                                    type="text" value={this.state.lng} />
                            </div>
                        </div>
                    </div>
                    <div id="Coordbox">
                        <p id="geolocbutton"
                            style={{
                                width: "80%",
                                marginTop: "30px",
                                marginRight: "10%",
                                marginLeft: '10%',
                                height: "30px",
                                borderRadius: "25px",
                                backgroundColor: "white",
                                textAlign: "center",
                                paddingTop: "10px",
                                backgroundImage: "linear-gradient(to top, rgba(116,219,132,0.3), #74DB84)",
                                color: "black"
                            }}
                        >Je renseigne l'adresse</p>
                        <div id="inputbox">
                            <div className="streetbox">
                                <div id="numberstreetbox" style={{
                                    marginRight: "40px"
                                }}>
                                    <p>N?? de la rue</p>
                                    <input type="text"
                                        onChange={this.handleAdressChange}
                                        value={this.state.nrue}
                                        name="nrue"
                                        style={{
                                            width: "100%"
                                        }} />
                                </div>
                                <div style={{
                                    width: "500px"
                                }}>
                                    <p>Nom de la rue</p>
                                    <input type="text"
                                        onChange={this.handleAdressChange}
                                        value={this.state.rue}
                                        name="rue"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Ville</p>
                                <input className="cityinput" type="text"
                                    onChange={this.handleAdressChange}
                                    value={this.state.ville}
                                    name="ville"
                                />
                            </div>
                            <div>
                                <p>Code Postal</p>
                                <input className="cityinput" type="text"
                                    onChange={this.handleAdressChange}
                                    value={this.state.cp}
                                    name="cp"
                                />
                            </div>
                            <Link
                                to={{
                                    pathname: '/detailPointdeCollecte',
                                    state: {
                                        lat: this.state.lat,
                                        lng: this.state.lng
                                    }
                                }}
                            >
                                <button>Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw")
})(NewTrash);

/*<input type="button" value="New marker" onClick={(e) => this.NewMarker()}

/>*/