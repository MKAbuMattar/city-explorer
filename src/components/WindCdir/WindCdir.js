import React, { Component } from 'react'

export default class WindCdir extends Component {

  capitalize = (str) => {
    if (typeof str !== `string`) return ``
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  render() {
    return (
      <>
        Wind Direction:
        {(this.props.windCdir).toLowerCase() === 'n'.toLowerCase() && this.capitalize('north')}
        {(this.props.windCdir).toLowerCase() === 'e'.toLowerCase() && this.capitalize('east')}
        {(this.props.windCdir).toLowerCase() === 's'.toLowerCase() && this.capitalize('south')}
        {(this.props.windCdir).toLowerCase() === 'w'.toLowerCase() && this.capitalize('west')}
        {(this.props.windCdir).toLowerCase() === 'ne'.toLowerCase() && this.capitalize('Northeast')}
        {(this.props.windCdir).toLowerCase() === 'se'.toLowerCase() && this.capitalize('SoutHeast')}
        {(this.props.windCdir).toLowerCase() === 'SW'.toLowerCase() && this.capitalize('Southwest')}
        {(this.props.windCdir).toLowerCase() === 'NW'.toLowerCase() && this.capitalize('northwest')}
        {(this.props.windCdir).toLowerCase() === 'NNE'.toLowerCase() && this.capitalize('north-northeast')}
        {(this.props.windCdir).toLowerCase() === 'ENE'.toLowerCase() && this.capitalize('east-northeast')}
        {(this.props.windCdir).toLowerCase() === 'ESE'.toLowerCase() && this.capitalize('east-southeast')}
        {(this.props.windCdir).toLowerCase() === 'SSE'.toLowerCase() && this.capitalize('south-southeast')}
        {(this.props.windCdir).toLowerCase() === 'SsW'.toLowerCase() && this.capitalize('south-southwest')}
        {(this.props.windCdir).toLowerCase() === 'WSW'.toLowerCase() && this.capitalize('west-sOUthwest')}
        {(this.props.windCdir).toLowerCase() === 'WNW'.toLowerCase() && this.capitalize('west-northwest')}
        {(this.props.windCdir).toLowerCase() === 'nnW'.toLowerCase() && this.capitalize('north-northwest')}
      </>
    )
  }
}
