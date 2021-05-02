import React, { Component } from 'react';
import '../../assets/css/background-style.css';

export default class StarsBox extends Component {
  render() {
    return (
      <>
        <div className="stars__box">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>
      </>
    );
  }
}
