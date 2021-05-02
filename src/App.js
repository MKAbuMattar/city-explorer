import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Card, Form, Col, Button } from 'react-bootstrap';
import './assets/css/style.css';

import StarsBox from './components/StarsBox/StarsBox';
import Loading from './components/Loading/Loading';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiURL: process.env.REACT_APP_LOCATIONIQ_API_URL,
      apiURLMap: process.env.REACT_APP_LOCATIONIQ_API_URL_MAP,
      apiKEY: process.env.REACT_APP_LOCATIONIQ_API_KEY,
      data: {},
      searchQuery: '',
      fileFormat: 'json',
      loading: false,
      error: '',
      alertError: false
    };
  }

  getLocation = async (event) => {

    event.preventDefault();

    this.setState({
      loading: true
    });

    try {
      if (this.state.searchQuery !== ``) {
        const url = `${this.state.apiURL}?key=${this.state.apiKEY}&q=${this.state.searchQuery}&format=${this.state.fileFormat}`;
        const request = await axios.get(url);
        this.setState({
          data: request.data[0],
          loading: false,
          error: ''
        });
      } else {
        this.setState({
          loading: false,
          error: 'Please enter a country or a city name.',
          alertError: true,
          data: {}
        });
      }
    } catch (err) {
      this.setState({
        loading: false,
        error: err,
        alertError: true,
        data: {}
      });
    }
  }

  updateSearchQuery = (event) => {
    if (event.target.value !== ``) {
      this.setState({
        searchQuery: event.target.value
      });
    } else {
      this.setState({
        searchQuery: '',
        loading: false,
        alertError: true,
        error: 'Please enter a country or a city name.'
      });
    }
  }

  render() {
    return (
      <>
        <StarsBox />
        <main className='grid'>
          <div className="box">
            <h1>City Explorer</h1>
            <div className="widthSpace"></div>
            <Form onSubmit={this.getLocation}>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Control
                    onChange={this.updateSearchQuery}
                    className="mb-2"
                    placeholder="City Name"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2">Get City Info</Button>
                </Col>
              </Form.Row>
            </Form>
            {this.state.loading ? (
              <>
                <div className="widthSpace"></div>
                <Loading />
                <div className="widthSpace"></div>
              </>
            ) : (
              <>
                {this.state.data.display_name ? (
                  <>
                    <div className="widthSpace"></div>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img
                        variant="top"
                        src={`${this.state.apiURLMap}?key=${this.state.apiKEY}&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`}
                        alt={this.state.data.display_name}
                      />
                      <Card.Body>
                        <Card.Title>{this.state.data.display_name}</Card.Title>
                        <Card.Text>
                          latitude : {this.state.data.lat}, longitude: {this.state.data.lon}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <div className="widthSpace"></div>
                  </>
                ) : (
                  <>
                    <div className="widthSpace"></div>
                    <Alert variant="danger" show={this.state.alertError} onClose={() => (this.setState({ alertError: false }))} dismissible>
                      <Alert.Heading>{`${this.state.error}`}</Alert.Heading>
                    </Alert>
                    <div className="widthSpace"></div>
                  </>
                )}
              </>
            )}
          </div>
        </main>

      </>
    )
  }
}
