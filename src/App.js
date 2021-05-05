import React, { Component } from 'react';
import axios from 'axios';

//views
import Index from './views/Index/Index'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiURL: process.env.REACT_APP_LOCATIONIQ_API_URL,
      apiURLMap: process.env.REACT_APP_LOCATIONIQ_API_URL_MAP,
      apiKEY: process.env.REACT_APP_LOCATIONIQ_API_KEY,
      ownApiURL: process.env.REACT_APP_MY_OWN_API_URL,
      data: {},
      weatherData: {},
      movieData: {},
      searchQuery: '',
      fileFormat: 'json',
      loading: false,
      error: '',
      alertError: false
    };
  }

  componentDidMount() {
    console.clear();
  }

  getLocation = async (event) => {

    event.preventDefault();

    this.setState({
      loading: true
    });

    try {
      if (this.state.searchQuery !== ``) {

        const url = `${this.state.apiURL}/v1/search.php?key=${this.state.apiKEY}&q=${this.state.searchQuery}&format=${this.state.fileFormat}`;
        const request = await axios.get(url);
        this.setState({
          data: request.data[0],

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
      console.clear();
      this.setState({
        loading: false,
        error: err,
        alertError: true,
        data: {}
      });
    }

    this.getWeather();
    this.getMovie();
  }

  getWeather = async () => {

    const weatherURL = `${this.state.ownApiURL}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`
    const weatherRequest = await axios.get(weatherURL)
    this.setState({
      weatherData: weatherRequest.data
    })

  }

  getMovie = async () => {
    const movieURL = `${this.state.ownApiURL}/movie?city=${this.state.searchQuery}`
    const movieRequest = await axios.get(movieURL)
    this.setState({
      movieData: movieRequest.data,
      loading: false,
    })
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

  closeAlertError = () => this.setState({ alertError: false })

  render() {
    return (
      <>
        <Index
          getLocation={this.getLocation}
          updateSearchQuery={this.updateSearchQuery}
          loading={this.state.loading}
          data={this.state.data}
          weatherData={this.state.weatherData}
          movieData={this.state.movieData}
          apiURLMap={this.state.apiURLMap}
          apiKEY={this.state.apiKEY}
          alertError={this.state.alertError}
          closeAlertError={this.closeAlertError}
          error={this.state.error}
        />
      </>
    )
  }
}
