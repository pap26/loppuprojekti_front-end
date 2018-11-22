import React, { Component } from 'react';

class Tapahtumat extends Component {

    render() {
        var tapahtumalista = this.props.listakaikki.map((tapahtuma) =>{
            return (
             <div className="tapahtuma_main">
                 <div className="tapahtuma_otsikko"> 
                     <span className="tapahtuma_tyyppi">{tapahtuma.summary}</span>
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
                
                         <div className="flex">
                        
                         </div>
                     </div>
                </div>
             </div>
            ) 
         })

        return (
            <div>
                <div>{tapahtumalista}</div>
              
            </div>) ;
    }
}


export default Tapahtumat;