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
                <img className="card-img-top" src="https://vl-media.fr/wp-content/uploads/2018/05/news.jpg" alt="Card image cap"/>
                <div className="card-body mb">
                  <h2 className="card-title" className="text-right">Your news</h2>
                  <p className="card-text" className="text-center">
                  </p>
                    <div className="row justify-content-center">
                        <button type="button" className="btn btn-primary center" onClick={this.click.bind(this)}>SEE MORE NEWS -></button>
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
    const ele = this.state.news.map((item,index)=>{
      return(
          <tr><td>{index}</td><td>{item.blagues}</td></tr>
      )
    })
    return ele

  }

  displayInfo(){
    if(this.state.isShow==true){

      return(
        <table className="table"><tbody>
        { this.displayTrue()}
        </tbody></table>
      )

    }
  }

}

export default cardNews
