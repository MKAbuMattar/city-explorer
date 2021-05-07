import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
export default class RestaurantCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} key={this.props.key}>
          <Card.Body>
            {this.props.imageUrl &&
              <Card.Img
                variant="top"
                src={`${this.props.imageUrl}`}
                alt={this.props.name}
              />
            }
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>Price: {this.props.price}</Card.Text>
            <Card.Text>Rating: {this.props.rating}</Card.Text>
            <Button
              href={this.props.url}
              target="__blank"
              variant="outline-primary"
              size="lg"
              block
            >Visit Restaurant</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}
