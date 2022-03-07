import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import SimpleMap from './Components/GMap'
import Header from './Components/Header'
import NZButton from './Components/NewZoneButton';
import NTButton from './Components/NewTrashButton';
import Login from "./components/login.component";
import LoginPopup from './Components/Login/LoginPopup';
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import AuthService from "./services/auth.service";
import SwitchButton from './Components/SwitchButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <SimpleMap />
        <NZButton />
        <NTButton />
        <SwitchButton />
        <div
          id = "greyscreen"
          style={{
            width:'100%',
            height: '130%',
            backgroundColor: "grey",
            position: "absolute",
            top: '0',
            zIndex: "1500",
            opacity: "50%",
            display:"none"
          }}>
        </div>
        <div
          id = "greyscreen2"
          style={{
            width:'100%',
            height: '130%',
            backgroundColor: "grey",
            position: "absolute",
            top: '0',
            zIndex: "1300",
            opacity: "50%",
            display:"none"
          }}>
        </div>
        <div
          id="Login"
          style={{
            display:"none",
            position: "absolute",
            zIndex: "2000",
          }}>
          <Login />
        </div>
        <div
          id="Register"
          style={{
            display:"none",
            position: "absolute",
            zIndex: "2000",
          }}>
          <Register />
        </div>
        <div
          id="LoginPopup"
          style={{
            display:"none",
            position: "absolute",
            zIndex: "1400",
          }}>
          <LoginPopup />
        </div>
      </div>
    );
  }
}
export default Home;