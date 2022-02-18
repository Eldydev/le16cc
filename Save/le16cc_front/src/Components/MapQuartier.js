import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./MapQuartier.css"

import plan16e from "../IMG/plan16e.png"

class MapQuartier extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p>Maquartier</p>

                <map name="exemple">
                    <area shape="rect" coords="10, 5, 20, 15"
                        href="page-3.html" alt="exemple de rectangle" />
                </map>
                <img
                    src={plan16e}
                    alt=""
                    useMap="#exemple" />


            </div>
        );
    }
}

export default MapQuartier