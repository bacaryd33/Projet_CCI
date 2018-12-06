import React, { Component } from 'react';



class Card extends Component {
  render() {
    return (
        <div className="container">
        <div cclassName="row">
        <div className="col-md-4">
        <div className="card mb">
            <div className="card-body mb">
                        <h5 className="card-title">Meteo</h5>
                            <p className="card-text">A vous de remplir avec des props</p>
                                <a href="https://github.com/">
                                    <button type="button" class="btn btn-primary mb">Cliquez ici</button>
                                </a>
                                
                </div>
                            
                        
        </div>
        <div className="card mb">
            <div className="card-body mb">
                        <h5 className="card-title">Routes</h5>
                            <p className="card-text">A vous de remplir avec des props</p>
                                <a href="https://github.com/">
                                    <button type="button" class="btn btn-primary mb">Cliquez ici</button>
                                </a>
                                
                </div>
                            
                        
        </div>
        <div className="card mb">
            <div className="card-body mb">
                        <h5 className="card-title">Infos</h5>
                            <p className="card-text">A vous de remplir avec des props</p>
                                <a href="https://github.com/">
                                    <button type="button" class="btn btn-primary mb">Cliquez ici</button>
                                </a>
                                
                </div>
                            
                        
        </div>
    
        </div>
        </div>
        </div>
 
    );
  }
}




export default Card;