import React, { Component } from 'react';
import Tapahtuma from './Tapahtuma.js';
import Instagram from './Instagram.js';
import Navigation from './Navigation.js';



class TapahtumaSivu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tapahtumat: []
        }

    }
    componentDidMount() {
        this.haeKymmenen();
    }
    haeKymmenen = () => {

    fetch('/api/kalenteri/kymmenen') 

        .then(response=> response.json())
        // yllä ole ennemmin response.json, koska usein haetaan jsonia
        .then(data=> {
            // jos haet esim jsonista kysysmys-tietoa, käytä json.kysymys
            this.setState({tapahtumat: data})
            });
    }; 


    render() {
        console.log(this.state.tapahtumat)
    
        return (
            <div>
                <div className="tausta">
                <Navigation />
                <div className="tapahtuma_bg">
                <Tapahtuma lista={this.state.tapahtumat}/>
                </div>
                <div className="instagam">
                <Instagram />
                </div>
                </div>
            </div>
        );
    }
}


export default TapahtumaSivu;