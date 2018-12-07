import React, { Component } from 'react';
import axios from 'axios';

class WeatherCard extends Component {

  constructor(props){
    super(props)
    this.state={
      name:"",
      weather:"",
      temp:"",
    }
  }


  componentDidMount() {
    const url = 'https://openweathermap.org/data/2.5/weather?lat=44.52&lon=3.5&appid=b6907d289e10d714a6e88b30761fae22';
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          weather:response.data.weather[0].description,
          temp:response.data.main.temp,
        });
      })
      .catch(error => {
        console.log(error);
      });
    }


  render() {
    return(
      <div>
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
                    <div class="row justify-content-center">
                        <button type="button" className="btn btn-primary center" data-toggle="modal" data-target="#myModal">SEE MORE -></button>
                    </div>
              </div>
            </div>


        <div className="modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>

        );

  }

}

export default WeatherCard ;
