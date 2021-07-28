import React, { Component } from 'react';
import logo_Wnoback2 from '../IMG/logo_Wnoback2.png';
import AccountLogo from '../IMG/AccountLogo.png';
import MenuLogo from '../IMG/MenuLogo.png';
import './Header.css';


class Header extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div id='HeaderDiv'>
                <div id="LogoDiv">
                    <img id='logo' src={logo_Wnoback2} alt="Logo" />
                    <p id="HeaderTitle">Le 16 c'est clean !</p>
                </div>
                <div id="HeaderLinkDiv">
                    <p className="HeaderLink">QUI SOMMES NOUS ?</p>
                    <p className="HeaderLink">COMMENT DECLARER ?</p>
                    <p className="HeaderLink">COMMENT AGIR ?</p>
                    <p className="HeaderLink">MON COMPTE</p>
                    <img id='Alogo' src={AccountLogo} alt="AccountLogo" />
                </div>
                <div id="HeaderMDiv">
                    <img id='Mlogo' src={MenuLogo} alt="MenuLogo" />
                </div>

            </div>
        );
    }
}

export default Header