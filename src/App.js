import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <h1>This is Home Page</h1>
          </Route>

          <Route path='/about'>
            <h1>This is About Page</h1>
          </Route>
          <Route path='/blog'>
            <h1>This is Blog Page</h1>
          </Route>
        </Switch>
      </Router>

      <Footer author='Koushith' />
    </div>
  );
}

export default App;
