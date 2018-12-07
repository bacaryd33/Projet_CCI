import React, { Component } from 'react';
import WeatherCard from './weatherCard.js'

class Card extends Component {
  render() {
    return (
        <div className="col-md-4">
            <WeatherCard></WeatherCard>
        </div>
      );
  }
}




export default Card;
