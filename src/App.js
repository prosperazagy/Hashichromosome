      /*global chrome*/
import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/navbar';


class App extends Component {

render() {
  return (
    <div className="App" style={{ minWidth: '400px', minHeight: '500px', maxHeight: '500px'}}>

      <div className="App-intro">
        <Navigation />


      </div>
    </div>
  );
}
}

export default App;
