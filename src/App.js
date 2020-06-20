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
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products/:id'>
            <Product />
          </Route>
        </Switch>
      </Router>

      <Footer author='Koushith' />
    </div>
  );
}

export default App;
