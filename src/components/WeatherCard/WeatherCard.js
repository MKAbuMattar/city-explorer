import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class WeatherCard extends Component {

  capitalize = (str) => {
    if (typeof str !== `string`) return ``
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} key={this.props.key}>
          <Card.Body>
            <Card.Title>{this.props.validDate}</Card.Title>
            <Card.Text>
              Wind Direction: {
                (this.props.windCdir).toLowerCase() === 'n'.toLowerCase() ? this.capitalize('north')
                  : (this.props.windCdir).toLowerCase() === 'e'.toLowerCase() ? this.capitalize('east')
                    : (this.props.windCdir).toLowerCase() === 's'.toLowerCase() ? this.capitalize('south')
                      : (this.props.windCdir).toLowerCase() === 'w'.toLowerCase() ? this.capitalize('west')
                        : (this.props.windCdir).toLowerCase() === 'ne'.toLowerCase() ? this.capitalize('Northeast')
                          : (this.props.windCdir).toLowerCase() === 'se'.toLowerCase() ? this.capitalize('SoutHeast')
                            : (this.props.windCdir).toLowerCase() === 'SW'.toLowerCase() ? this.capitalize('Southwest')
                              : (this.props.windCdir).toLowerCase() === 'NW'.toLowerCase() ? this.capitalize('northwest')
                                : (this.props.windCdir).toLowerCase() === 'NNE'.toLowerCase() ? this.capitalize('north-northeast')
                                  : (this.props.windCdir).toLowerCase() === 'ENE'.toLowerCase() ? this.capitalize('east-northeast')
                                    : (this.props.windCdir).toLowerCase() === 'ESE'.toLowerCase() ? this.capitalize('east-southeast')
                                      : (this.props.windCdir).toLowerCase() === 'SSE'.toLowerCase() ? this.capitalize('south-southeast')
                                        : (this.props.windCdir).toLowerCase() === 'SsW'.toLowerCase() ? this.capitalize('south-southwest')
                                          : (this.props.windCdir).toLowerCase() === 'WSW'.toLowerCase() ? this.capitalize('west-sOUthwest')
                                            : (this.props.windCdir).toLowerCase() === 'WNW'.toLowerCase() ? this.capitalize('west-northwest')
                                              : ('north-northWest')}
            </Card.Text>
            <Card.Text>
              Low Temp: {this.props.lowTemp}
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
