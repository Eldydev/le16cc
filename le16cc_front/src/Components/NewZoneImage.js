import React, { Component, useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import ProgressBar from "./progressbar";





class NewZoneImg extends Component {
    fileObj = [];
    fileArray = [];
    intervalID = 0;

    constructor(props) {
        super(props)
        this.state = {
            file: [null],
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng,
            completed: 0,
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        var timesRun = 0;
        var interval = setInterval(() => {
            timesRun += 1;
            if (timesRun === 1) {
                clearInterval(interval);
            }
            this.setState({ completed: 25 })
        }, 200);

    }


    componentWillMount() {
        clearInterval(this.state.intervalID)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    render() {
        console.log(' mount', this.state.mount)
        console.log("ccords : ", this.props)
        console.log('lat: ', this.state.lat, ' / lng: ', this.state.lng)
        return (
            <div>
                <p>NEW ZONE IMAGE PAGE</p>
                <div style={{
                    width: "40%",
                    marginLeft: "30%"
                }}>
                    <ProgressBar bgcolor={"red"} completed={this.state.completed} step={2} />
                </div>

                <form>
                    <div className="form-group multi-preview">
                        {(this.fileArray || []).map(url => (
                            <img src={url} alt="..." />
                        ))}
                    </div>

                    <div className="form-group">
                        <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                    </div>
                    <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
                    <Link
                        to={{
                            pathname: '/Zonedetail',
                            state: {
                                lat: this.state.lat,
                                lng: this.state.lng,
                                file: this.state.file
                            }
                        }}
                    >
                        <button>Next</button>
                    </Link>
                </form >
            </div>
        );
    }
}

export default NewZoneImg

