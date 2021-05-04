import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class MovieCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} key={this.props.key}>
          <Card.Body>
            {this.props.img &&
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/original/${this.props.img}`}
                alt={this.props.description}
              />
            }
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Release Date: {this.props.releaseDate}
            </Card.Text>
            {this.props.description &&
              <Card.Text className="cardDescription">
                Description: {this.props.description}
              </Card.Text>
            }
          </Card.Body>
        </Card>
      </>
    )
  }
}
