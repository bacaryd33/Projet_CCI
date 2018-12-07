import React, { Component } from 'react';
import axios from 'axios';

class WeatherCard extends Component {

  constructor(props){
    super(props)
    this.state={
      name:"",

    }
  }
  componentDidMount() {
    const url = 'https://openweathermap.org/data/2.5/weather?lat=44.52&lon=3.5&appid=b6907d289e10d714a6e88b30761fae22';
    axios.get(url)
      .then(response => {
        console.log(response.data.name);
        this.setState({
          name: response.data.name,
        });
      })
      .catch(error => {
        console.log(error);
      });
    }



  render() {
    return (
            <div className="card mb">
                <p className="card-text" className="text-center">
                      {this.state.name}
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
