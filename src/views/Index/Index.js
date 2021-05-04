import React, { Component } from 'react'
import '../../assets/css/style.css'

//components
import StarsBox from '../../components/StarsBox/StarsBox'
import Loading from '../../components/loader/loader'
import AlertError from '../../components/AlertError/AlertError'
import SearchForm from '../../components/SearchForm/SearchForm'
import LocationCard from '../../components/LocationCard/LocationCard'
import WeatherCards from '../../components/WeatherCards/WeatherCards'
import MovieCards from '../../components/MovieCards/MovieCards'

export default class Index extends Component {

  componentDidMount() {
    // console.clear();
  }

  render() {
    return (
      <>
        <StarsBox />
        <main className='grid'>
          <div className="box">
            <h1>City Explorer</h1>
            <SearchForm
              getLocation={this.props.getLocation}
              updateSearchQuery={this.props.updateSearchQuery}
            />
            {this.props.loading ? (
              <Loading />
            ) : (
              <>
                {this.props.data.display_name ? (
                  <>
                    <LocationCard
                      apiURLMap={this.props.apiURLMap}
                      apiKEY={this.props.apiKEY}
                      data={this.props.data}
                    />

                    <WeatherCards
                      weatherData={this.props.weatherData}
                    />

                    <MovieCards
                      movieData={this.props.movieData}
                    />

                  </>
                ) : (
                  <AlertError
                    alertError={this.props.alertError}
                    closeAlertError={this.props.closeAlertError}
                    error={this.props.error}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </>
    )
  }
}
