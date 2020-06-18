import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name='koushith' />
      <HelloWorld name='Preetham' />
      <HelloWorld name='koushith' />
      <HelloWorld name='koushith' />
    </div>
  );
}

export default App;
