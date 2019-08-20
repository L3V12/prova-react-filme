import React, { Component } from 'react';
import Routes from './routes';

import Hearder from './components/Hearder';
import Search from './components/Search';
import Menu from './components/Menu';


class App extends Component
{


  render()
  {
    return(
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
