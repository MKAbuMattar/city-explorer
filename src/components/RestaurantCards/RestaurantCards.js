import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

export default class RestaurantCards extends Component {
  render() {
    return (
      <>
        {console.log(this.props.restaurantData)}
        {console.clear()}
        {this.props.restaurantData.constructor !== Object ? (
          <>
            <div className="whiteSpace"></div>
            <h1>Restaurants</h1>
            <Row className="justify-content-md-center">
              {this.props.restaurantData.map((result, index) => (
                <Col md="auto">
                  <RestaurantCard
                    key={index}
                    name={result.name}
                    imageUrl={result.image_url}
                    price={result.price}
                    rating={result.rating}
                    url={result.url}
                  />
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <></>
        )}
        <div className="whiteSpace"></div>
      </>
    )
  }
}
