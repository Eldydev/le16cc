import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import logo_Wnoback2 from '../IMG/logo_Wnoback2.png';
import AccountLogo from '../IMG/AccountLogo.png';
import MenuLogo from '../IMG/MenuLogo.png';

import ProgressBar from "./progressbar";
import ZoneConfirmPopup from './ZoneConfirmPopup';
import "./ZoneConfirmPopup.css"


class NewZoneConfirm extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            file: this.props.location.state.file,
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            user: AuthService.getCurrentUser(),
            completed: 50,
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

    }

    NewMarker() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lat: this.state.lat,
                lng: this.state.lng,
                userid: this.state.user.id,
                img: this.state.file
            })
        };
        fetch('https://api.le16cc.fr/v1/new-marker', requestOptions)
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

    ZoneConfirmPopupDisplay() {
        document.getElementById('greyscreen3').style.display = "block"
        document.getElementById('ZoneConfirmPopup').style.display = "block"
        this.child.current.Display();
    }


    render() {
        console.log(this.state.num)
        return (
            <div>
                <div>
                    <p>ZONE CONFIRM</p>
                    <div style={{
                        width: "40%",
                        marginLeft: "30%"
                    }}>
                        <ProgressBar bgcolor={"red"} completed={this.state.completed} step={4} />
                    </div>
                    <p>{this.state.lat}</p>
                    <p>{this.state.lng}</p>
                    {this.state.file.map((data, i) => {
                        return (
                            <div className="gif"
                                key={i}
                            >
                                <img src={data} />
                            </div>
                        )
                    })}
                    <p>{this.state.user.username}</p>
                    <p>{this.state.user.id}</p>
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
                        <ZoneConfirmPopup ref={this.child}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewZoneConfirm