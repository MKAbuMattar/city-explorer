import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import WeatherCard from '../WeatherCard/WeatherCard'

export default class WeatherCards extends Component {
  render() {
    return (
      <>
        {console.log(this.props.weatherData)}
        {console.clear()}
        {this.props.weatherData && (
          <>
            <div className="whiteSpace"></div>
            <h1>Weather</h1>
            <Row className="justify-content-md-center">
              {this.props.weatherData.map((result, index) => (
                <Col md="auto">
                  <WeatherCard
                    key={index}
                    validDate={result.date}
                    temp={result.temp}
                    windCdir={result.windCdir}
                    minTemp={result.minTemp}
                    maxTemp={result.maxTemp}
                    description={result.description}
                  />
                </Col>
              ))}
            </Row>
          </>)}
        <div className="whiteSpace"></div>
      </>
    )
  }
}
