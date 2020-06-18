import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import HelloWorld from './Components/HelloWorld';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Header />

      <Footer author='Koushith' />
    </div>
  );
}

export default App;
