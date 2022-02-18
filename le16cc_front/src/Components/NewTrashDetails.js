import React, { Component, useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import ProgressBar from "./progressbar";

import "./ZoneDetails.css"
import addImage from '../IMG/addImage.png'

class NewTrashDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            completed: 25,
            selected: "",
            active: false,
            type: "",
            ashtray: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
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
        console.log("node :", target.parentElement.parentElement)
        var selected = target.parentElement.parentElement
        if(this.state.selected != "") {
            this.state.selected.classList.remove("selected")
        }
        selected.classList.add("selected");
        this.setState({ selected: selected })
        console.log("value ", value, " name : ", name, " target : ", target)
        this.setState({
            [name]: value
        });
    }

    handleSelect(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("value ", value, " name : ", name, " target : ", target)
    }

    render() {
        console.log("selected :", this.state.selected)
        return (
            <div>
                <p>DETAILS ZONE DE COLLECTE</p>
                <div style={{
                    width: "40%",
                    marginLeft: "30%",
                    marginBottom: "20px"
                }}>
                    <ProgressBar bgcolor={"red"} completed={this.state.completed} step={2} />
                </div>
                <div id="Zonedetails">

                    <div>
                        <p className='ZoneDetailsLabel'>Type de poubelle</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}
                            onChange={this.handleInputChange}
                        >

                            <div className='Trashillus'>
                                <label>
                                    <input  type="radio" name="type" value="1" />TYPE 1

                                </label>
                                <img

                                    style={{
                                        height: '100px',
                                        width: '100px'
                                    }}
                                    src={addImage} />
                            </div>
                            <div className='Trashillus'>
                                <label>
                                    <input  type="radio" name="type" value="2" />TYPE 2

                                </label>
                                <img

                                    style={{
                                        height: '100px',
                                        width: '100px'
                                    }}
                                    src={addImage} />
                            </div>
                            <div className='Trashillus'>
                                <label>
                                    <input  type="radio" name="type" value="3" />TYPZ 3

                                </label>
                                <img

                                    style={{
                                        height: '100px',
                                        width: '100px'
                                    }}
                                    src={addImage} />
                            </div>
                            <div className='Trashillus'>
                                <label>
                                    <input  type="radio" name="type" value="4" />TYPE 4

                                </label>
                                <img

                                    style={{
                                        height: '100px',
                                        width: '100px'
                                    }}
                                    src={addImage} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <p className='ZoneDetailsLabel'>Cendrier ?</p>
                        <div style={{
                            display: "flex",
                            width: "70%",
                            marginLeft: "15%",
                            justifyContent: "space-evenly"

                        }}
                            onChange={this.handleInputChange}>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="ashtray" value="yes" />oui
                            </label>
                            <label>
                                <input className='ZoneDetailsLabelInput' type="radio" name="ashtray" value="no" />non
                            </label>
                        </div>
                    </div>
                </div>
                <Link
                    to={{
                        pathname: '/NewTrashConfirm',
                        state: {
                            lat: this.state.lat,
                            lng: this.state.lng,
                            type: this.state.type,
                            ashtray: this.state.ashtray

                        }
                    }}
                >
                    <button>Next</button>
                </Link>

            </div>
        );
    }
}

export default NewTrashDetails