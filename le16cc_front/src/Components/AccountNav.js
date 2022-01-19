import '../App.css';
import './AccountNav.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from "../components/login.component";
import Register from "../components/register.component";
import Profile from "../components/profile.component";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import AuthService from "../services/auth.service";


class AccountNav extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  loginDisplay() {
    document.getElementById('greyscreen').style.display = "block"
    document.getElementById('Login').style.display = "block"
  }
  RegisterDisplay() {
    document.getElementById('greyscreen').style.display = "block"
    document.getElementById('Register').style.display = "block"
  }

  NavDisplay() {
    document.getElementById('AccNav').style.display = 'none'
  }

  render() {

    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div id="AccNav" onMouseLeave={(e) => this.NavDisplay()}>
        <nav >
          <div >
            <p >
              <a href="/" >ACCEUIL
              </a>
            </p>

            {showModeratorBoard && (
              <p >
                <a href="/mod" >
                  Moderator Board
                </a>
              </p>
            )}

            {showAdminBoard && (
              <p >
                <a href="/admin" >
                  Admin Board
                </a>
              </p>
            )}

            {currentUser && (
              <p >
                <a href="/user" >
                  User
                </a>
              </p>
            )}
          </div>

          {currentUser ? (
            <div >
              <p >
                <a href="/profile" >
                  {currentUser.username}
                </a>
              </p>
              <p >
                <a href="/login" onClick={this.logOut}>
                  LogOut
                </a>
              </p>
            </div>
          ) : (
            <div >
              <p
                style={{
                  color: "black"
                }}
                onClick={this.loginDisplay}>
                CONNEXION
              </p>

              <p
                style={{
                  color: "black"
                }}
                onClick={this.RegisterDisplay}>
                INSCRIPTION
              </p>
            </div>
          )}
        </nav>
      </div>
    );
  }
}
export default AccountNav;