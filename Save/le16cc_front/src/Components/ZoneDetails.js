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
            filetest: this.props.location.state.filetest,
            filenametest: this.props.location.state.filenametest,
            completed: 25,
            difficulty: "",
            size: "",
            type1: "",
            type2: "",
            type3: "",
            glove: "",
            bag: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
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

    test() {
        console.log('test function ')
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("value ", value, " name : ", name, " target : ", target)
        this.setState({
            [name]: value
        });
    }

    render() {
        console.log('difficulty :', this.state.difficulty)
        console.log('size :', this.state.size)
        console.log('type1 :', this.state.type1)
        console.log('type2 :', this.state.type2)
        console.log('type3 :', this.state.type3)
        console.log('glove :', this.state.glove)
        console.log('bag :', this.state.bag)
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

                        }}
                            onChange={this.handleInputChange}
                        >
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="difficulty" value="1" />1
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="difficulty" value="2" />2
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="difficulty" value="3" />3
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="difficulty" value="4" />4
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="difficulty" value="5" />5
                            </label>
                        </div>

                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Taille des déchets</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}
                            onChange={this.handleInputChange}
                        >
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="size" value="petits" />petits
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="size" value="moyens" />moyens
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="size" value="grands" />grands
                            </label>
                        </div>

                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Nature des dechets</p>
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "white",
                                marginTop: "10px",
                                justifyContent: "center"
                            }}>
                            <div className="form-group">
                                <label
                                    htmlFor="password">Type 1</label>
                                <select
                                    name="type1"
                                    style={{
                                        borderRadius: "25px",
                                        backgroundColor: "white",
                                        marginTop: "10px",
                                    }}
                                    onChange={this.handleInputChange}>
                                    <option value="papier">Papier</option>
                                    <option value="carton">Carton</option>
                                    <option value="plastique">Plastique</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="password">Type 2</label>
                                <select
                                    name="type2"
                                    style={{
                                        borderRadius: "25px",
                                        backgroundColor: "white",
                                        marginTop: "10px"
                                    }}
                                    onChange={this.handleInputChange}>
                                    <option value="papier">Papier</option>
                                    <option value="carton">Carton</option>
                                    <option value="plastique">Plastique</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="password">Type 3</label>
                                <select
                                    name="type3"
                                    style={{
                                        borderRadius: "25px",
                                        backgroundColor: "white",
                                        marginTop: "10px"
                                    }}
                                    onChange={this.handleInputChange}>
                                    <option value="papier">Papier</option>
                                    <option value="carton">Carton</option>
                                    <option value="plastique">Plastique</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Besoin de gants ?</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}
                            onChange={this.handleInputChange}
                        >
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="glove" value="yes" />oui
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="glove" value="no" />non
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

                        }}
                            onChange={this.handleInputChange}>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="bag" value="yes" />oui
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="bag" value="no" />non
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
                            file: this.state.file,
                            filetest: this.state.filetest,
                            filenametest: this.state.filenametest,
                            difficulty: this.state.difficulty,
                            size: this.state.size,
                            type1: this.state.type1,
                            type2: this.state.type2,
                            type3: this.state.type3,
                            glove: this.state.glove,
                            bag: this.state.bag
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