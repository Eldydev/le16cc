import React, { Component } from 'react';
import LogoBalai from '../../IMG/LogoBalai2.png';
import LogoPelle from '../../IMG/LogoPelle2.png';
import LogoGlove from '../../IMG/LogoGlove2.png';
import './login.css';
import Cross from "../../IMG/Cross.png"

class LoginPopup extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    loginDisplay() {
        document.getElementById('greyscreen').style.display = "block"
        document.getElementById('Login').style.display = "block"
    }

    RegisterDisplay() {
        document.getElementById('greyscreen').style.display = "block"
        document.getElementById('Register').style.display = "block"
    }

    LoginPopupDisplay() {
        document.getElementById('greyscreen2').style.display = "none"
        document.getElementById('LoginPopup').style.display = "none"
      }


    render() {
        return (
            <div id="loginpopupbox">
                <div>
                    <img
                        id="LoginPopupCross"
                        onClick={this.LoginPopupDisplay}
                        src={Cross}
                        alt=""
                        style={{
                            width: "25px",
                            height: "25px",
                            position: "absolute",
                        }}
                    />
                </div>
                <div>
                    <p id="title">Rejoignez <br />Le 16 C'est clean</p>
                    <p id="titledesc">Participez à l'élan de préservation local, citoyen et collaboratif</p>
                </div>
                <div id="LogoZone">
                    <img id='Balailogo' src={LogoBalai} alt="LogoBalai" />
                    <img id='Glovelogo' src={LogoGlove} alt="LogoGlove" />
                    <img id='Pellelogo' src={LogoPelle} alt="LogoPelle" />
                </div>
                <div id="SigninButton">

                    <a onClick={this.RegisterDisplay} id="LoginLinkTrue">
                        <p>INSCRIVEZ-VOUS GRATUITEMENT !</p>
                    </a>
                </div>
                <div id="LoginLink">
                    <p>Déjà membre ? <a onClick={this.loginDisplay} id="LoginLinkTrue">Connexion</a></p>
                </div>
            </div>
        );
    }
}

export default LoginPopup