import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kirjaudu from './components/Kirjaudu.js';
import Etusivu from './components/Etusivu.js';
import Pelaajat from './components/Pelaajat.js';
import Toimihenkilot from './components/Toimihenkilot.js';
import TapahtumatSivu from './components/TapahtumatSivu.js';
import Info from './components/Info';
import './App.css';
import UusiPelaaja from "./components/UusiPelaaja";
import Pelaajalista from "./components/Pelaajalista";


const App = appProps => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact name="index" path="/" component={Etusivu}/>
                <Route path="/login" component={Kirjaudu} />
                 <Route path="/tapahtumat" component={TapahtumatSivu} />
                <Route path="/info" component={Info}/>
                <Route path="/pelaajat" component={Pelaajat}/>
                <Route path="/toimihenkilot" component={Toimihenkilot}/>
                <Route path="/pelaaja" component={UusiPelaaja}/>
                <Route path="/pelaajalista" component={Pelaajalista}/>

            </Switch>
        </div>
    </Router>
)

export default App;
