import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

export default class SearchForm extends Component {
  render() {
    return (
      <>
        <div className="whiteSpace"></div>
        <Form onSubmit={this.props.getLocation}>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                onChange={this.props.updateSearchQuery}
                className="mb-2"
                placeholder="City Name"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">Get City Info</Button>
            </Col>
          </Form.Row>
        </Form>
        <div className="whiteSpace"></div>
      </>
    )
  }
}
