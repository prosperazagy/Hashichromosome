      /*global chrome*/
import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import LoginForm from './Components/loginForm';


class App extends Component {

render() {
  return (
    <div className="App" style={{ minWidth: '400px', minHeight: '500px', maxHeight: '500px'}}>

      <div className="App-intro">
        <NavBar />
        <div>
          <LoginForm />
        </div>

      </div>
    </div>
  );
}
}

export default App;
