import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../App';

class AuthButton extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  componentDidMount() {

    axios
      .get(`${API_URL}/check-auth`, { withCredentials: true })
      .then((res) => {
        this.setState({
          isAuthenticated: true,
          user: res.data,
        });
      })
      .catch(() => {
        this.setState({
          isAuthenticated: false,
        });
      });
  }

  signOut = () => {
 
    const url = `${window.location.protocol}//${window.location.host}`;
    window.location = `${API_URL}/logout?from=${url}`;
  };

  render() {
    return (
      this.state.isAuthenticated && (
        <p>
          <img
            height="25"
            src={this.state.user.photos[0].value}
            alt={this.state.user.displayName}
          />
          Welcome, {this.state.user.displayName}!{' '}
          <button onClick={this.signOut}>Sign out</button>
        </p>
      )
    );
  }
}

export default AuthButton;
