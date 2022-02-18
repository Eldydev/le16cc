import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import Geocode from "react-geocode";
import { Map, InfoWindow, Marker, GoogleApiWrapper, MapProps } from 'google-maps-react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import logo_Wnoback2 from '../IMG/logo_Wnoback2.png';
import AccountLogo from '../IMG/AccountLogo.png';
import MenuLogo from '../IMG/MenuLogo.png';

import ProgressBar from "./progressbar";
import ZoneConfirmPopup from './ZoneConfirmPopup';
import "./ZoneConfirmPopup.css"


class NewTrashConfirm extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            celat: this.props.location.state.lat,
            celng: this.props.location.state.lng,
            center: {
                lat: 48.8639907837,
                lng: 2.27723288536
            },
            markers: { position: { lat: this.props.location.state.lat, lng: this.props.location.state.lng } },
            user: AuthService.getCurrentUser(),
            completed: 50,
            type: this.props.location.state.type,
            ashtray: this.props.location.state.ashtray,
            nrue: "",
            rue: "",
            ville: "",
            cp: ""
        };
    }

    componentDidMount() {
        var timesRun = 0;
        var interval = setInterval(() => {
            timesRun += 1;
            if (timesRun === 1) {
                clearInterval(interval);
            }
            this.setState({ completed: 75 })
        }, 200);

        var lat = this.state.lat
        var lng = this.state.lng
        console.log('lat', lat, 'lng', lng)

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


    NewMarker() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lat: this.state.lat,
                lng: this.state.lng,
                userid: this.state.user.id,
                type: this.state.type,
                ashtray: this.state.ashtray
            }),
        };
        fetch('https://api.le16cc.fr/v1/new-trashmarker', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.test === 'success') {
                    console.log('New marker added')
                    this.ZoneConfirmPopupDisplay();
                }
            })
    }

    UploadImage(id) {
        const file = this.state.filetest;
        const formData = new FormData()
        formData.append('image', file)
        formData.append('id', id)

        fetch('https://api.le16cc.fr/v1/imagestest', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'multipart/form-data',
            },
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.ZoneConfirmPopupDisplay();
            })
            .catch(error => {
                console.error(error)
            })
    }

    ZoneConfirmPopupDisplay() {
        document.getElementById('greyscreen3').style.display = "block"
        document.getElementById('ZoneConfirmPopup').style.display = "block"
        this.child.current.Display();
    }


    render() {
        return (
            <div>
                <div>
                    <p> CONFIRMEZ LES INFORAMATION DE LA POUBELLE A DECLARER</p>
                    <div style={{
                        width: "40%",
                        marginLeft: "30%"
                    }}>
                        <ProgressBar bgcolor={"red"} completed={this.state.completed} step={3} />
                    </div>
                    <p>COORDS</p>
                    <p>{this.state.lat}</p>
                    <p>{this.state.lng}</p>
                    <p>USER INFO</p>
                    <p>{this.state.user.username}</p>
                    <p>{this.state.user.id}</p>
                    <p>DETAILS</p>
                    <p>type :{this.state.type}</p>
                    <p>cendrier : {this.state.ashtray}</p>
                    <div id="mapbox">
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
                                    draggable={false}
                                    title={this.state.markers.title}
                                    name={this.state.markers.name}
                                    position={this.state.markers.position}
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
                    <input type="button" value="New marker" onClick={(e) => this.NewMarker()} />
                </div>


                <div>
                    <div
                        id="greyscreen3"
                        style={{
                            width: '100%',
                            height: '130%',
                            backgroundColor: "grey",
                            position: "absolute",
                            top: '0',
                            zIndex: "1000",
                            opacity: "50%",
                            display: "none"
                        }}>
                    </div>
                    <div
                        id="ZoneConfirmPopup"
                        style={{
                            display: "none",
                            position: "absolute",
                            zIndex: "1400",
                        }}>
                        <ZoneConfirmPopup ref={this.child} />
                    </div>
                </div>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD7ZmbMrmVkR19h8d5MfZQseosUypXDTZw")
})(NewTrashConfirm);