import React, { Component } from "react";
import { useLocation, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import ProgressBar from "./progressbar";

import logo from "../IMG/logo.png"
import Cross from "../IMG/Cross.png"

export default class ZoneConfirmPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 75
        };
        this.Display = this.Display.bind(this)
    }

    Display() {
        var timesRun = 0;
        var interval = setInterval(() => {
            timesRun += 1;
            if (timesRun === 1) {
                clearInterval(interval);
            }
            this.setState({ completed: 100 })
        }, 200);
    }

    render() {
        return (
            <div className="col-md-12">
                <div
                    id="LoginCard"
                    className="card card-container">
                    <div
                        style={{
                            right: 0,
                            top: 0,
                            position: "relative",
                        }}
                    >
                        <img
                            id="LoginCross"
                            onClick={this.Display}
                            src={Cross}
                            alt=""
                            style={{
                                width: "25px",
                                height: "25px",
                                position: "absolute",
                            }}
                        />
                    </div>

                    <img
                        id="LogoLogin"
                        src={logo}
                        alt="16cc LOgo Green"
                    />
                    <p>Votre Zone a été ajouté avec succès !</p>
                    <ProgressBar bgcolor={"red"} completed={this.state.completed} step={5} style={
                        {
                            with: "100%"
                        }
                    } />
                    <div className="form-group">
                        <Link
                            to={{
                                pathname: '/',
                                state: {
                                    lat: this.state.lat,
                                    lng: this.state.lng,
                                    file: this.state.file
                                }
                            }}
                        >
                            <button id="NZCPButton"
                                className="btn btn-primary btn-block"
                            >OK</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
