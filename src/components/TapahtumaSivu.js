import React, { Component } from 'react';
import Tapahtuma from './Tapahtuma.js';
import Instagram from './Instagram.js';
import Navigation from './Navigation.js';



class TapahtumaSivu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tapahtumat: [],
            ladattu: false
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
            this.setState({tapahtumat: data, ladattu: true})
            });
    }; 


    render() {
       
        const naytaTapahtuma = this.state.ladattu ? 'tapahtuma_bg' : 'tapahtuma_bg hidden';
        const naytaInsta = this.state.ladattu ? '' : 'hidden';
    
        return (
            <div>
                <div className="tausta">
                    <Navigation />
                    <div className={naytaTapahtuma}>
                        <Tapahtuma lista={this.state.tapahtumat} />
                    </div>
                    <div className={naytaInsta}>
                        <Instagram  />
                    </div>
                </div>
            </div>  
        );
    }
}


export default TapahtumaSivu;