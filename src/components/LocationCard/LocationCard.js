import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class LocationCard extends Component {
  render() {
    return (
      <>
        <div className="whiteSpace"></div>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`${this.props.apiURLMap}/v3/staticmap?key=${this.props.apiKEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=10`}
            alt={this.props.locationData.display_name}
          />
          <Card.Body>
            <Card.Title>{this.props.locationData.display_name}</Card.Title>
            <Card.Text>
              latitude : {this.props.locationData.lat}, longitude: {this.props.locationData.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="whiteSpace"></div>
      </>
    )
  }
}
