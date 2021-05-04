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
            src={`${this.props.apiURLMap}/v3/staticmap?key=${this.props.apiKEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`}
            alt={this.props.data.display_name}
          />
          <Card.Body>
            <Card.Title>{this.props.data.display_name}</Card.Title>
            <Card.Text>
              latitude : {this.props.data.lat}, longitude: {this.props.data.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="whiteSpace"></div>
      </>
    )
  }
}
