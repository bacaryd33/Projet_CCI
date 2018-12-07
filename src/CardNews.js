import React, { Component } from 'react';
import axios from 'axios';

class cardNews extends Component {

  constructor(props){
    super(props)
    this.state={
      news:[],
      isShow:false,
  }
  }

  componentDidMount() {
    const url = 'https://bridge.buddyweb.fr/api/blagues/blagues/';
    axios.get(url)
      .then(response => {
        this.setState({
          news:response.data,
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
                    NEWS
                </p>
                <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
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
    let contenu = "<table className='table'><tbody>";
    let content = this.state.news.map((news, index) => {
      contenu+="<tr><td>"+index+"</td><td>"+news+"</td></tr>";
    });
    contenu +="</tbody></table>";
    return contenu;
  }

  displayInfo(){
    if(this.state.isShow==true){
      return this.displayTrue();
    }
  }

}

export default cardNews
