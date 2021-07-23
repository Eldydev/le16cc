import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component, Fragment } from 'react';
import Map from './Components/Map'
import Header from './Components/Header'


class App extends Component {
  state = {
    incidents: [],
  }
  render() {
    return (
      <div> 
        <Header />
        <Map />
      </div>
    );
  }
 }
 export default App;
 
