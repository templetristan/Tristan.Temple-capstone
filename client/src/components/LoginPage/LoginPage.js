import React, { Component } from 'react';
import { API_URL } from '../../App';

class Login extends Component {
  login = () => {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    window.location = `${API_URL}/login/?from=${url}`;
  };

  render() {
    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
