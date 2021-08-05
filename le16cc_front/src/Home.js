import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SimpleMap from './Components/GMap'
import Header from './Components/Header'


class Home extends Component {
  state = {
    incidents: [],
  }
  render() {
    return (
      <div> 
        <Header />
        <SimpleMap />
      </div>
    );
  }
 }
 export default Home;