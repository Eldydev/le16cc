import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import logo_Wnoback2 from '../IMG/logo_Wnoback2.png';
import AccountLogo from '../IMG/AccountLogo.png';
import MenuLogo from '../IMG/MenuLogo.png';
import './NZButton.css';


class NZButton extends Component {
    constructor() {
        super();
        this.state = {
            logged: false,
            with: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        if (isLogin()) {
            this.setState({ logged: true })
        }
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        console.log(':o')
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth <= 599) {
            document.getElementById('NZB').classList.remove('active')
        }
    }

    Redirect() {
        var NZB = document.getElementById('NZB')
        if (NZB.classList.contains('active')) {
            if (this.state.logged === true) {
                console.log("rediect clicked")
                window.location.href = "/Newzone"
            }
            else {
                document.getElementById('greyscreen2').style.display = "block"
                document.getElementById('LoginPopup').style.display = "block"
            }
        }


    }


    render() {
        return (
            <div>
                <p id="NZB" className='active' onClick={(e) => this.Redirect()}> + AJOUTER UNE ZONE A NETTOYER</p>
            </div>
        );
    }
}

export default NZButton