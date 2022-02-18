import React, { Component, useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import ProgressBar from "./progressbar";


class ZoneInfos extends Component {


    constructor(props) {
        super(props)
        this.state = {
            MarkerImg: {},
            MarkerDetails: {},
            userid: {},
            id: ""
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ id: id })
        this.getMarkerImage(id)
        this.getMarkerDetails(id)
        this.getUserId(id)
    }

    getMarkerImage(id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        };
        fetch('http://localhost:8080/v1/MarkerImages', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log('markerimage :', data)
                this.setState({ MarkerImg: 'http://localhost:8080/' + data.rows[0].url})
            })
    }

    getMarkerDetails(id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        };
        fetch('http://localhost:8080/v1/MarkerDetails', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log('markerdetails :', data)
                this.setState({ MarkerDetails: data.rows[0] })
            })
    }

    getUserId(id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        };
        fetch('http://localhost:8080/v1/UserId', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log('userid :', data)
                this.setState({ userid: data.rows[0] })
            })
    }


    render() {

        return (
            <div>
                <div>id: {this.state.id}</div>
                <p>username : {this.state.userid.username}</p>
                <p>difficulty : {this.state.MarkerDetails.difficulty}</p>
                <p>size : {this.state.MarkerDetails.size}</p>
                <p>type1 : {this.state.MarkerDetails.type1}</p>
                <p>type2 : {this.state.MarkerDetails.type2}</p>
                <p>type3 : {this.state.MarkerDetails.type3}</p>
                <p>bag : {this.state.MarkerDetails.bag}</p>
                <p>gloves : {this.state.MarkerDetails.bag}</p>
                <img
                    style={{
                        height: '100px',
                        width: '100px'
                    }}
                    src={this.state.MarkerImg} />
            </div>
        );
    }
}

export default ZoneInfos