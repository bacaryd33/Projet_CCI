import React, { Component } from 'react';
import WeatherCard from './weatherCard.js';
import CardNews from './CardNews.js';



class Section extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div className="col-md-4">
                <WeatherCard></WeatherCard>
            </div>
            <div className="col-md-4">
                <CardNews></CardNews>
            </div>
          </div>
      </div>
      </div>
    )


  }
}




export default Section;
