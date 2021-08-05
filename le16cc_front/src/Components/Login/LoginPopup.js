import React, { Component } from 'react';
import LogoBalai from '../../IMG/LogoBalai2.png';
import LogoPelle from '../../IMG/LogoPelle2.png';
import LogoGlove from '../../IMG/LogoGlove2.png';
import './login.css';

class LoginPopup extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div id="loginpopupbox">
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
                    <p>INSCRIVEZ-VOUS GRATUITEMENT !</p>
                </div>
                <div id="LoginLink">
                    <p>Déjà membre ? <a  href="/" id="LoginLinkTrue">Connexion</a></p>
                </div>
            </div>
        );
    }
}

export default LoginPopup