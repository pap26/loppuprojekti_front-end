import React from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kirjaudu from './components/Kirjaudu.js';
import Etusivu from './components/Etusivu.js';
import PelaajatSivu from './components/PelaajatSivu.js';
import Toimihenkilot from './components/Toimihenkilot.js';
import Kalenteri from './components/Kalenteri.js';
import './App.css';
import PelaajakorttiSivu from "./components/PelaajakorttiSivu";
import Pelaajalista from "./components/Pelaajalista";


const App = appProps => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact name="index" path="/" component={Etusivu}/>
                <Route path="/login" component={Kirjaudu} />
                <Route path="/kalenteri" component={Kalenteri} />
                <Route path="/pelaajat" component={PelaajatSivu}/>
                <Route path="/toimihenkilot" component={Toimihenkilot}/>
                <Route path="/pelaaja" component={PelaajakorttiSivu}/>
                <Route path="/pelaajalista" component={Pelaajalista}/>
            </Switch>
        </div>
    </Router>
)

export default App;
