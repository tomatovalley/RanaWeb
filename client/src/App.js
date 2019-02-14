import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import Landing from "./components/layout/index";
import Login from "./components/auth/login";
import Registro from "./components/auth/registro";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/registro" component={Registro}></Route>
            <Route exact path="/login" component={Login}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
