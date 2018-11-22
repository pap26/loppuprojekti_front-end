import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import KirjauduSivu from './components/KirjauduSivu.js';
import Etusivu from './components/Etusivu.js';
import Pelaajat from './components/Pelaajat.js';
import Toimihenkilot from './components/Toimihenkilot.js';
import TapahtumatSivu from './components/TapahtumatSivu.js';
import Info from './components/Info';
import './App.css';

 const App = appProps => (
  <Router>
  <div className="App">
    <Switch>
      <Route exact name="index" path="/" component={Etusivu} />
      <Route path="/kirjaudu" component={KirjauduSivu} />
      <Route path="/tapahtumat" component={TapahtumatSivu} />
      <Route path="/info" component={Info} />
      <Route path="/pelaajat" component={Pelaajat} />
      <Route path="/toimihenkilot" component={Toimihenkilot} />
      
    </Switch>
  </div>
  </Router>
 )

export default App;
