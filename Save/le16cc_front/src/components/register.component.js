import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service"
import "./Logincss.css"

import Cross from "../IMG/Cross.png"
import logo from "../IMG/logo.png"
import plan16e2 from "../IMG/plan16e2.png"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeQuartier = this.onChangeQuartier.bind(this);
    this.DisplayMap = this.DisplayMap.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      quartier: "Auteuil-Nord",
      successful: false,
      message: "",
      displaymap: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeQuartier(e) {
    this.setState({
      quartier: e.target.value
    });
  }

  RegisterDisplay() {
    document.getElementById('greyscreen').style.display = "none"
    document.getElementById('Register').style.display = "none"
  }

  DisplayMap() {
    var mapdisplay = this.state.displaymap
    console.log("click", "mapdisplay :", mapdisplay)
    if (mapdisplay == false) {
      document.getElementById('16eMap').style.display = "block"
      this.setState({ displaymap: true })
    }
    else {
      document.getElementById('16eMap').style.display = "none"
      this.setState({ displaymap: false })
    }
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.quartier
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div
        
        className="col-md-12">
        <div 
        id="RegisterCard"
        className="card card-container">
          <div>
            <img
              id="RegisterCross"
              onClick={this.RegisterDisplay}
              src={Cross}
              alt=""
              style={{
                width: "25px",
                height: "25px",
                position: "absolute",
              }}
            />
          </div>
          <img
          id="RegisterLogo"
            src={logo}
            alt="16cc LOgo Green"
          />
          <p>Devenez membre de la communauté du 16cc</p>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="email">Votre Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Votre Pseudo</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="password">Quartier</label>
                  <select
                    style={{
                      borderRadius: "25px",
                      backgroundColor: "white",
                      marginTop: "10px"
                    }}
                    onChange={this.onChangeQuartier}>
                    <option value="Auteuil-Nord">Auteuil - Nord</option>
                    <option value="Auteuil-Sud">Auteuil - Sud</option>
                    <option value="Bois-de-boulogne">Bois de boulogne</option>
                    <option value="Chaillot">Chaillot</option>
                    <option value="Dauphine">Dauphine</option>
                    <option value="Muette-Nord">Muette-Nord</option>
                    <option value="Muette-Sud">Muette-Sud</option>
                  </select>
                </div>
                <div>
                  <p
                    onClick={this.DisplayMap}
                  > Voir carte</p>
                  <img
                    id="16eMap"
                    src={plan16e2}
                    alt="Plan 16e"
                    style={{
                      width: "100%",
                      height: "350px",
                      display: "none"
                    }} />
                </div>
                <div className="form-group">
                  <button
                    id="RegisterButton"
                    className="btn btn-primary btn-block">Inscription</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div >
      </div >
    );
  }
}
