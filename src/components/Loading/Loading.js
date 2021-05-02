import React, { Component } from 'react';
import '../../assets/css/loading.css';

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="spinner-box">
          <div className="pulse-container">
            <div className="pulse-bubble pulse-bubble-1"></div>
            <div className="pulse-bubble pulse-bubble-2"></div>
            <div className="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      </>
    );
  }
}
