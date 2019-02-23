import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import Product from './pages/product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/product" component={Product} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
