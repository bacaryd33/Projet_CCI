import React, { Component } from 'react';
import axios from 'axios';

class WeatherCard extends Component {

  constructor(props){
    super(props)
    this.state={
      name:"",
      weather:"",
      temp:"",
      pressure:"",
      humidity :"",
      temperature_min :"",
      temperature_max : "",
      wind_speed :"",
    }
  }

  componentDidMount() {
    const url = 'https://openweathermap.org/data/2.5/weather?lat=44.52&lon=3.5&appid=b6907d289e10d714a6e88b30761fae22';
    axios.get(url)
      .then(response => {
        this.setState({
          name: response.data.name,
          weather:response.data.weather[0].description,
          temp:response.data.main.temp,
          pressure:response.data.main.pressure,
          humidity:response.data.main.humidity,
          temperature_min:response.data.main.temp_min,
          temperature_max:response.data.main.temp_max,
          wind_speed:response.data.wind.speed,
          isShow : false,
        });
      })
      .catch(error => {
        console.log(error);
      });
    }


  render() {
    return(
            <div className="card mb">
                <p className="card-text" className="text-center">
                      {this.state.name}
                </p>
                <img className="card-img-top" src="https://img.20mn.fr/r5SvxqSZSrWS4W587_eJxw/830x532_fond-ecran-defaut-windows-xp.jpg" alt="Card image cap"/>
                <div className="card-body mb">
                  <h2 className="card-title" className="text-right">{this.state.temp}°C</h2>
                  <p className="card-text" className="text-center">
                    {String.toUpperCase(this.state.weather)}
                  </p>
                    <div className="row justify-content-center">
                        <button type="button" className="btn btn-primary center" onClick={this.click.bind(this)}>SEE MORE -></button>
                  </div>
              </div>
                {this.displayInfo()}
            </div>
        );
  }

  click(){
    if(this.state.isShow==false){
      this.setState({
        isShow:true,
      })
    }else{
      this.setState({
        isShow:false,
      })
    }
  }
  displayTrue(){
    return(
      <div>
        <table className="table">
                <tbody>
                    <tr>
                        <td>pressure</td>
                        <td>{this.state.pressure}</td>
                    </tr>
                    <tr>
                        <td>humidity</td>
                        <td>{this.state.humidity}</td>
                    </tr>
                    <tr>
                        <td>temperature min</td>
                        <td>{this.state.temperature_min}</td>
                    </tr>
                    <tr>
                        <td>temperature max</td>
                        <td>{this.state.temperature_max}</td>
                    </tr>
                    <tr>
                        <td>wind speed</td>
                        <td>{this.state.wind_speed}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    )
  }
  displayInfo(){
    if(this.state.isShow==true){
      return this.displayTrue()
    }
  }

}

export default WeatherCard ;
