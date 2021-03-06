import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Home from './Home.js'
import NewContactForm from './Components/Login/Signin.js';
import LoginPopup from './Components/Login/LoginPopup.js';

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import NewZone from './Components/NewZone';
import NewTrash from './Components/NewTrash';
import NewZoneImg from './Components/NewZoneImage';
import PrivateRoute from './Components/PrivateRoutes';
import PublicRoute from './Components/PublicRoutes';
import MapQuartier from './Components/MapQuartier';
import NewZoneConfirm from './Components/ZoneConfirm';
import NewtrashConfirm from './Components/NewTrashConfirm';
import ZoneConfirmPopup from './Components/ZoneConfirmPopup';
import ZoneDetails from './Components/ZoneDetails';
import NewTrashDetails from './Components/NewTrashDetails';
import ZoneInfos from './Components/ZoneInfo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} exact />
          <Route exact path='/Signin' component={NewContactForm} exact />
          <Route exact path='/login2' component={LoginPopup} exact />
          <Route exact path="/connexion" component={Login} />
          <Route exact path="/inscription" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <PrivateRoute path="/NewZone" component={NewZone} />
          <PrivateRoute path="/AjouterUnPointdeCollecte" component={NewTrash} />
          <PublicRoute path="/NewZoneImg" component={NewZoneImg} />
          <Route path='/NewZoneConfirm' component={NewZoneConfirm}/>
          <Route path='/NewTrashConfirm' component={NewtrashConfirm}/>
          <PublicRoute path="/MapQuartier" component={MapQuartier}/>
          <Route exact path='/ZCP' component={ZoneConfirmPopup} exact />
          <Route exact path='/Zonedetail' component={ZoneDetails} exact />
          <Route exact path='/detailPointdeCollecte' component={NewTrashDetails} exact />
          <Route
          exact
          path="/Zoneinfo/:id"
          component={ZoneInfos}
        />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

