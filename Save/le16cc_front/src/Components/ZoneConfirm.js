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
            filetest: this.props.location.state.filetest,
            filenametest: this.props.location.state.filenametest,
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            user: AuthService.getCurrentUser(),
            completed: 50,
            difficulty: this.props.location.state.difficulty,
            size: this.props.location.state.size,
            type1: this.props.location.state.type1,
            type2: this.props.location.state.type2,
            type3: this.props.location.state.type3,
            glove: this.props.location.state.glove,
            bag: this.props.location.state.bag
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lat: this.state.lat,
                lng: this.state.lng,
                userid: this.state.user.id,
                img: this.state.file,
                difficulty: this.state.difficulty,
                size: this.state.size,
                type1: this.state.type1,
                type2: this.state.type2,
                type3: this.state.type3,
                glove: this.state.glove,
                bag: this.state.bag,
                filenametest: this.state.filenametest
            }),
        };
        fetch('http://localhost:8080/v1/new-marker', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.test === 'success') {
                    this.UploadImage(data.test2)
                    console.log('New marker added')
                    
                }
            })
    }

    UploadImage(id) {
        const file = this.state.filetest;
        const formData = new FormData()
        formData.append('image', file)
        formData.append('id', id)

        fetch('http://localhost:8080/v1/imagestest', {
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
                    <p>ZONE CONFIRM</p>
                    <div style={{
                        width: "40%",
                        marginLeft: "30%"
                    }}>
                        <ProgressBar bgcolor={"red"} completed={this.state.completed} step={4} />
                    </div>
                    <p>COORDS</p>
                    <p>{this.state.lat}</p>
                    <p>{this.state.lng}</p>
                    <p>IMAGES</p>
                    {this.state.file.map((data, i) => {
                        return (
                            <div className="gif"
                                key={i}
                            >
                                <img src={data} />
                            </div>
                        )
                    })}
                    <p>USER INFO</p>
                    <p>{this.state.user.username}</p>
                    <p>{this.state.user.id}</p>
                    <p>DETAILS</p>
                    <p>difficulty :{this.state.difficulty}</p>
                    <p>size : {this.state.size}</p>
                    <p>type 1 : {this.state.type1}</p>
                    <p>type 2 : {this.state.type2}</p>
                    <p>type 3 : {this.state.type3}</p>
                    <p>gloves : {this.state.glove}</p>
                    <p>bag : {this.state.bag}</p>
                    <p>filenametest : {this.state.filenametest}</p>
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

export default NewZoneConfirm