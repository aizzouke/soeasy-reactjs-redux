import React, { Component } from 'react';
import logo from '../../static/img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} height="60px" alt="Logo" />
        <h3 className="header-text">Simple page application based on ReactJS 16.2.0</h3>
      </div>
    );
  }
}
