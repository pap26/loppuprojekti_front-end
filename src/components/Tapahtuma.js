import React, { Component } from 'react';
import weather from '../img/weather.png';
import Kartta from './Kartta.js';


class Tapahtuma extends Component {
    constructor(props) {
        super(props);
        this.state = {displayKartta: false};
      }

    displayKartta = () => {
        this.setState({
        //displayKartta: true
        displayKartta: !this.state.displayKartta
        })}

    render() {
        // const otsikko = tapahtuma.summary.split(':');
        // console.log(otsikko[0])
        // console.log(otsikko[1])


        console.log("Tapahtuma.render props", this.props);
        var tapahtumalista = this.props.lista.map((tapahtuma) =>{
           return (
            <div className="tapahtuma_main fadeIn">
                <div className="tapahtuma_otsikko"> 
                    <span className="tapahtuma_tyyppi">{tapahtuma.summary.split(':')[0]}</span>
                    <span className="tapahtuman_nimi">{tapahtuma.summary.split(':')[1]}</span>

               </div>

               <div className="tapahtuma_reg">
                    <div className="tapahtuma_aika">
                      <div className="pvm">
                        {new Intl.DateTimeFormat('fi-FI', {  
                        month: '2-digit', 
                        day: '2-digit' 
                        }).format(tapahtuma.start.dateTime.value)}</div>

                      <span className="aika"> 
                        {new Intl.DateTimeFormat('fi-FI', { 
                        hour: 'numeric',
                        minute: 'numeric',
                        }).format(tapahtuma.start.dateTime.value)}&ndash;</span>

                      <span className="aika">
                        {new Intl.DateTimeFormat('fi-FI', { 
                        hour: 'numeric',
                        minute: 'numeric',
                        }).format(tapahtuma.end.dateTime.value)}</span>
                        <div>
                            <button className="in_button btn btn-light" >in</button>
                            <button className="in_button btn btn-light">out</button>
                        </div>
                    </div>
                    <div>
                        <div className="tapahtuma_paikka">{tapahtuma.location}</div>
                        <div className="flex">
                            <div className="kartta">
                            <button className="kartta_btn btn " onClick={this.displayKartta}>Kartta</button>
                            </div>
                            <div className="saainfo"><img src={weather} className="weather" alt="weather" /></div> 
                        </div>
                    </div>
               </div>
            </div>
           ) 
        })
        
        


        return (
            <div>
                <div>{tapahtumalista}
                <div>{this.state.displayKartta && <Kartta />}</div>
                
                
                </div>
                
            </div>) ;
    }
}

export default Tapahtuma;

