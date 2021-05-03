import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class AlertError extends Component {
  render() {
    return (
      <>
        <div className="widthSpace"></div>
        <Alert variant="danger" show={this.props.alertError} onClose={this.props.closeAlertError} dismissible>
          <Alert.Heading>{`${this.props.error}`}</Alert.Heading>
        </Alert>
        <div className="widthSpace"></div>
      </>
    )
  }
}
