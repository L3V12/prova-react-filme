import React, { Component } from 'react';

import './style.css';

class Hearder extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col-md-12" id="Hearder">
            <h2 align="center" >Filmes LK</h2>
          </div>
          <div align="center" id="tela">
          <div id="top">
          <a href="/Seila"><h2 id="top2">Ver Filmes</h2></a>
          </div>        
          </div>

        </div>
    );
  }
}

export default Hearder;
