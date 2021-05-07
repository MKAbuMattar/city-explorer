import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import MovieCard from '../MovieCard/MovieCard'

export default class MovieCards extends Component {
  render() {
    return (
      <>
        {console.log(this.props.movieData)}
        {/* {console.clear()} */}
        {this.props.movieData && (
          <>
            <div className="whiteSpace"></div>
            <h1>Movies</h1>
            <Row className="justify-content-md-center">
              {this.props.movieData.map((result, index) => (
                <Col md="auto">
                  <MovieCard
                    key={index}
                    title={result.title}
                    img={result.img}
                    releaseDate={result.releaseDate}
                    description={result.description}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
        <div className="whiteSpace"></div>
      </>
    )
  }
}
