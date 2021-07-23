import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Map extends Component {
    state = {
        lat: 48.8639907837,
        lng: 2.27723288536,
        zoom: 14,
    }
    render() {
        return (
               <MapContainer 
                  center={[this.state.lat, this.state.lng]} 
                  zoom={this.state.zoom} 
                  style={{ width: '100%', height: '900px'}}
               >
               <TileLayer
                 attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
        )
    }
 }
 

 