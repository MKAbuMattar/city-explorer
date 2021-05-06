import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import WindCdir from '../WindCdir/WindCdir'
export default class WeatherCard extends Component {

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} key={this.props.key}>
          <Card.Body>
            <Card.Title>{this.props.validDate}</Card.Title>
            <Card.Text>
              <WindCdir
                windCdir={this.props.windCdir}
              />
            </Card.Text>
            <Card.Text>
              Temp: {this.props.temp}
            </Card.Text>
            <Card.Text>
              Min Temp: {this.props.minTemp}
            </Card.Text>
            <Card.Text>
              Max Temp: {this.props.maxTemp}
            </Card.Text>
            <Card.Text>
              Description: {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
