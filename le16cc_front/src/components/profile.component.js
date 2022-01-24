import React, { Component } from "react";
import AuthService from "../services/auth.service";

import logo from "../IMG/logo.png"
import "./Logincss.css"

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <div id="ProfileContainer">
          <div>
            <img
              id="LogoProfile"
              src={logo}
              alt="16cc LOgo Green"
            />
          </div>
          <div className="PageTitle">
            VOTRE PROFILE
          </div>
          <div>
            <h3><strong>USERNAME</strong></h3>
            <p>{currentUser.username}</p>
            <h3><strong>VOTRE EMAIL</strong></h3>
            <p>{" "}{currentUser.email}</p>
            <h3><strong>VOTRE QUARTIER</strong></h3>
          </div>
        </div>
      </div>
    );
  }
}

/*
        <div>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong>{" "}
            {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <p>
            <strong>Id:</strong>{" "}
            {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
        </div>
        */
