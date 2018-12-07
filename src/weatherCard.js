import React, { Component } from 'react';

class WeatherCard extends Component {
  render() {
    return (
            <div className="card mb">
                <p className="card-text" className="text-center">
                      LOZERE
                </p>
                <img className="card-img-top" src="https://www.edupics.com/image-01-partly-cloudy-dm9922.jpg" alt="Card image cap"/>
                <div className="card-body mb">
                  <h2 className="card-title" className="text-right">18.6°C</h2>
                  <p className="card-text" className="text-center">
                    BLABLA LE TEMP EST TRES BEAU BLABLA
                  </p>
                  <a href="https://github.com/">
                      <div class="row justify-content-center">
                          <button type="button" className="btn btn-primary center">VOIR PLUS -> </button>
                      </div>
                  </a>
              </div>
          </div>
        );
  }
}

export default WeatherCard ;
