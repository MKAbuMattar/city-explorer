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
      locationData: {},
      weatherData: {},
      movieData: {},
      restaurantData: {},
      searchQuery: '',
      fileFormat: 'json',
      loading: false,
      error: '',
      alertError: false
    };
  }

  componentDidMount() {
    // console.clear();
  }

  getLocation = async (event) => {

    event.preventDefault();

    this.setState({
      loading: true
    });

    try {
      if (this.state.searchQuery !== ``) {

        const request = await axios.get(`${this.state.apiURL}/v1/search.php`, {
          params: {
            key: this.state.apiKEY,
            q: this.state.searchQuery,
            format: this.state.fileFormat
          }
        });

        this.setState({
          locationData: request.data[0],
          error: ''
        });

        this.getWeather(this.state.locationData.lat, this.state.locationData.lon);
        this.getMovie(this.state.searchQuery);
        this.getRestaurant(this.state.searchQuery);

      } else {
        this.setState({
          loading: false,
          error: 'Please enter a country or a city name.',
          alertError: true,
          locationData: {}
        });
      }
    } catch (err) {
      console.clear();
      this.setState({
        loading: false,
        error: err,
        alertError: true,
        locationData: {}
      });
    }
  }

  getWeather = async (lat, lon) => {
    const weatherRequest = await axios.get(`${this.state.ownApiURL}/weather`, {
      params: {
        lat: lat,
        lon: lon,
      }
    });
    this.setState({
      weatherData: weatherRequest.data
    })
  }

  getMovie = async (city) => {
    const movieRequest = await axios.get(`${this.state.ownApiURL}/movie`, {
      params: {
        city: city,
      }
    });
    this.setState({
      movieData: movieRequest.data
    })
  }

  getRestaurant = async (loc) => {
    try {
      const restaurantRequest = await axios.get(`${this.state.ownApiURL}/restaurant`, {
        params: {
          location: loc,
        }
      });
      this.setState({
        restaurantData: restaurantRequest.data,
        loading: false,
      })
    } catch (err) {
      this.setState({
        loading: false
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

  closeAlertError = () => this.setState({ alertError: false })

  render() {
    return (
      <>
        <Index
          getLocation={this.getLocation}
          updateSearchQuery={this.updateSearchQuery}
          loading={this.state.loading}
          locationData={this.state.locationData}
          weatherData={this.state.weatherData}
          restaurantData={this.state.restaurantData}
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
