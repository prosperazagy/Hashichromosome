/*global chrome*/
import React, { Component } from 'react';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './Components/navbar';
import LoginForm from './Components/loginForm';
import EngineList from './Components/engineList';


class App extends Component {

  render() {
    return (

      <div className="App" style={{ minWidth: '400px', minHeight: '500px', maxHeight: '500px' }}>
        <div className="App-intro">
          <div>
            <Router>
              <NavBar />
              <Switch>
                <Route path="/Login">
                  <LoginForm />
                </Route>
                <Route path="/Home">
                  <EngineList />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
