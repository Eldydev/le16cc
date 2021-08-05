import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Home from './Home.js'
import NewContactForm from './Components/Login/Signin.js';
import LoginPopup from './Components/Login/LoginPopup.js';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} exact />
          <Route exact path='/Signin' component={NewContactForm} exact />
          <Route exact path='/login' component={LoginPopup} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 
