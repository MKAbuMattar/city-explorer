import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import WeatherCard from '../WeatherCard/WeatherCard'

export default class WeatherCards extends Component {
  render() {
    return (
      <>
        <div className="widthSpace"></div>
        <h1>Weather in {this.props.weatherData.timezone}</h1>
        <Row className="justify-content-md-center">
          {this.props.weatherData.data.map(result => (
            <Col md="auto">
              <WeatherCard
                key={result.moonrise_ts}
                validDate={result.valid_date}
                windCdir={result.wind_cdir}
                lowTemp={result.low_temp}
                maxTemp={result.max_temp}
                description={result.weather.description}
              />
            </Col>
          ))}
        </Row>
        <div className="widthSpace"></div>
      </>
    )
  }
}
