import React, { Component, useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import ProgressBar from "./progressbar";

import "./ZoneDetails.css"

class ZoneDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: this.props.location.state.file,
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            completed: 25,
        }
    }

    componentDidMount() {
        var timesRun = 0;
        var interval = setInterval(() => {
            timesRun += 1;
            if (timesRun === 1) {
                clearInterval(interval);
            }
            this.setState({ completed: 50 })
        }, 200);
    }

    render() {
        return (
            <div>
                <p>NEW ZONE DETAILS </p>
                <div style={{
                    width: "40%",
                    marginLeft: "30%"
                }}>
                    <ProgressBar bgcolor={"red"} completed={this.state.completed} step={3} />
                </div>
                <div id="Zonedetails">
                    <div>
                        <p className='ZoneDetailsLabel'>Niveau de difficultés</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" checked={true} />1
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />2
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />3
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />4
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />5
                            </label>
                        </div>

                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Taille des dechets</p>
                        <input className='ZoneDetailsInput' type="text" value="0" name="gender" />
                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Nature des dechets</p>
                        <input className='ZoneDetailsInput' type="text" value="0" name="gender" />
                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Besoin de gants ?</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" checked={true} />oui
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />non
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Besion de sacs poubelles ?</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" checked={true} />oui
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" value="option1" />non
                            </label>
                        </div>
                    </div>
                </div>
                <Link
                    to={{
                        pathname: '/NewZoneConfirm',
                        state: {
                            lat: this.state.lat,
                            lng: this.state.lng,
                            file: this.state.file
                        }
                    }}
                >
                    <button>Next</button>
                </Link>

            </div>
        );
    }
}

export default ZoneDetails