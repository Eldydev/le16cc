import React, { Component } from 'react';
import Switch from '../IMG/Switch.png';

import './NZButton.css';



class SwitchButton extends Component {
    constructor() {
        super();
        this.state = {
            rot: 0
        };
    }

    Switch() {
        var NTB = document.getElementById('NTB')
        var NZB = document.getElementById('NZB')
        var SB = document.getElementById('SwitchButton')
        var rot = this.state.rot + 180
        SB.style = 'transform: rotate(' + rot + 'deg)';
        this.setState({rot: rot})


        if (NTB.classList.contains("Switched")) {
            console.log('NTB')
            NTB.classList.remove('Switched', 'active')
            NZB.classList.add('Switched', 'active')
            //SB.classList.add('rotated')
        } else {
            console.log('NZB')
            NZB.classList.remove('Switched', 'active')
            NTB.classList.add('Switched', 'active')
            //SB.classList.remove('rotated')
        }

    }

    render() {
        return (
            <div>
                <img
                    style={{
                        width: "25px",
                        height: '25px',
                        position: 'absolute',
                        zIndex: '1000'
                    }}
                    id='SwitchButton' src={Switch} onClick={(e) => this.Switch()} alt="SwitchButton" />
            </div>
        );
    }
}

export default SwitchButton