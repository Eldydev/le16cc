import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./NewZone.css"

class NZinput extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div id="inputbox">
                <div className="streetbox">
                    <div style={{
                        width: "120px",
                        marginRight:"40px"
                    }}>
                        <p>N° de la rue</p>
                        <input style={{
                            width: "100%"
                        }} type="text" />
                    </div>
                    <div style={{
                        width: "500px"
                    }}>
                        <p>Nom de la rue</p>
                        <input style={{
                            width: "100%"
                        }}
                            type="text" />
                    </div>
                </div>
                <div>
                    <p>Ville</p>
                    <input className="cityinput" type="text" />
                </div>
                <div>
                    <p>Code Postal</p>
                    <input className="cityinput" type="text" />
                </div>
            </div>
        );
    }
}

export default NZinput