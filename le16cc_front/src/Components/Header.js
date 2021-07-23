import React, { Component } from 'react';
import logo_Wnoback2 from '../IMG/logo_Wnoback2.png';
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
                <img src={logo_Wnoback2} alt="Logo" />
                <div id="HeaderLinkDiv">
                <p id="HeaderTitle">Le 16 c'est clean</p>
                <p className="HeaderLink">QUI SOMMES NOUS ?</p>
                <p className="HeaderLink">COMMENT DECLARER ?</p>
                <p className="HeaderLink">COMMENT AGIR ?</p>
                <p className="HeaderLink">MON COMPTE</p>
                </div>

            </div>
        );
    }
}

export default Header