import React, { Component } from 'react';
import '../../assets/css/loader.css'

export default class loader extends Component {
  render() {
    return (
      <>
        <div className="widthSpace"></div>
        <div className="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="widthSpace"></div>
      </>
    )
  }
}
