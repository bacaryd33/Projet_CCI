import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div>
        <div className="col-md-4">
            <WeatherCard></WeatherCard>
        </div>
        <div className="col-md-4">
            <CardNews></CardNews>
        </div>
      </div>
      );
  }
}




export default Card;
