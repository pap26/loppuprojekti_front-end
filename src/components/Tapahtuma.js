import React, { Component } from 'react';
import weather from '../img/weather.png';

class Tapahtuma extends Component {


    render() {
        var tapahtumalista = this.props.lista.map(function(tapahtuma) {

           return (
            <div className="tapahtuma_main">
                <div className="tapahtuma_otsikko"> 
                    <span className="tapahtuma_tyyppi">{tapahtuma.summary}</span>
                    {/* <span className="tapahtuman_nimi">{tapahtuma.tapahtuman_nimi}</span> */}
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
                        }).format(tapahtuma.start.dateTime.value)}-</span>

                      <span className="aika">
                        {new Intl.DateTimeFormat('fi-FI', { 
                        hour: 'numeric',
                        minute: 'numeric',
                        }).format(tapahtuma.end.dateTime.value)}</span>
                        <div>
                            <button className="in_button">in</button>
                            <button className="in_button">out</button>
                        </div>
                    </div>
                    <div>
                        <div className="tapahtuma_paikka">{tapahtuma.location}</div>
                        <div className="flex">
                            <div className="kartta"> <p><a href="#">kartta</a></p></div>
                            <div className="saainfo"><img src={weather} className="weather" alt="weather" /></div> 
                        </div>
                        
                    </div>
                    
               </div>
              
            </div>
           ) 
        })
        console.log(tapahtumalista);
        return (
            <div>
                {tapahtumalista}
            </div>) ;
    }
}

export default Tapahtuma;

