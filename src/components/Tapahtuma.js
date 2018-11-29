import React, { Component } from 'react';
import Googlekartta from './Googlekartta.js';
import Saatila from './Saatila';

//Tämä luokka palauttaa listauksen tapahtumista. Tapahtuma-luokka saa propsinsa TapahtumaSivu-komponentilta

class Tapahtuma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            in: [],
            // displayKartta: false
            //Tämä alla oleva lista oli kettumainen. Staten täytyy olla false yhtä monta kertaa, kuin listassa on tapahtumia.
            lista: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        };
      }

    setIn(calendarId, onkoIn){
        const suodatettuInLista = this.state.in.filter(o => !(calendarId in o))
        this.setState({in: suodatettuInLista.concat({[calendarId]: onkoIn})})
    }
    
    displayKartta = (i) => {
        var temp = this.state.lista;
        temp[i] = !this.state.lista[i];
        this.setState({
            lista: temp
        //displayKartta: true
        // displayKartta: !this.state.displayKartta
        })}


    render() {
        
       
        console.log("Tapahtuma.render props", this.props);
        var tapahtumalista = this.props.lista.map((tapahtuma, i) =>{

        let btn_class_in = this.state.in.find(o => (tapahtuma.id in o) && o[tapahtuma.id]) ? "in_btn flat_button green-button" : "in_btn flat_button silver-button";
        let btn_class_out = this.state.in.find(o => (tapahtuma.id in o) && !o[tapahtuma.id]) ? "in_btn flat_button red-button" : "in_btn flat_button silver-button";
            
           return (
            <div key={tapahtuma.id} className="tapahtuma_main fadeIn">

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
                            <button className={btn_class_in} onClick={() => this.setIn(tapahtuma.id, true)}>in</button>
                            <button className={btn_class_out} onClick={() => this.setIn(tapahtuma.id, false)}>out</button>
                        </div>
                    </div>
                       {/* Alla divit, joista löytyvät: karttanappi, säätilan kuva sekä avautuva karttanäkymä. Säätila haetaan Saatila-luokasta, 
                        Kartta puolestaan haetaan Googlekartta-luokasta. -pz */}
                    <div>
                        <div className="tapahtuma_paikka">{tapahtuma.location}</div>
                        <div className="flex">
                            <div className="kartta">
                                <button className="flat_button yellow-button" onClick={this.displayKartta.bind(this, i)}>Kartta</button>
                            </div>
                            <div className="saainfo"><Saatila saalokaatio = {tapahtuma.location}></Saatila></div>                            
                        </div>
                    </div>
               </div>
                <div className="kartta">{this.state.lista[i] && <Googlekartta lokaatio= {tapahtuma.location} />}
                </div>
            </div>
           ) 
        })

        return (
            <div>
                <div>{tapahtumalista} </div>
            </div>);
    }
}

export default Tapahtuma;

