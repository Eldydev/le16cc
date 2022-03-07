import React, { Component } from 'react';
import { isLogin } from '../utils';

import './NZButton.css';


class NTButton extends Component {
    constructor() {
        super();
        this.state = {
            logged: false
        };
    }

    componentDidMount() {
        if (isLogin()) {
            this.setState({ logged: true })
        }
    }

    Redirect() {
        var NTB = document.getElementById('NTB')
        if (NTB.classList.contains('active')) {
            if (this.state.logged === true) {
                console.log("rediect clicked")
                window.location.href = "/AjouterUnPointdeCollecte"
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
                <p id="NTB" className='Switched active' onClick={(e) => this.Redirect()}> + AJOUTER UN POINT DE COLLECTE</p>
            </div>
        );
    }
}

export default NTButton