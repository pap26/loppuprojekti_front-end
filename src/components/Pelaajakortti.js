import React, { Component } from 'react';
import MuokkaaPelaajaa from "./MuokkaaPelaajaa";

class Pelaajakortti extends Component {
    state = {pelaaja: null}

    componentDidMount() {
        this.haePelaaja();
    }

    haePelaaja = () => {
        let id = this.props.match.params.id;
        //console.log("Pelaajan id:", id);
        fetch(`/api/pelaaja/${id}`, {
        }).then((response) => {
            return response.json();
        })
            .then((pelaaja)=> {
            this.setState({pelaaja: pelaaja});
        });
    }

    render() {

        return ( this.state.pelaaja ? (
        <div>
                <h3 className="center">{this.state.pelaaja.etunimi} {this.state.pelaaja.sukunimi} </h3>
                <div className="pelinumero_box center">{this.state.pelaaja.numero}</div>
                
                <div className="pelaaja_ruutu_isompi">
                <div className="pelaaja_img_isompi"><img src={this.state.pelaaja.kuvapolku} alt="pelaajan kuva"  /></div>

                <div className="lohko">
                
                <div className="syntymaaika">

                    <p><span className="tiedot">Pelipaikka:</span> {this.state.pelaaja.pelipaikka}</p>

                <p><span className="tiedot">Syntymäpäivä:</span> {this.state.pelaaja.syntymaaika}</p>
                    <p><span className="tiedot">Sähköposti:</span> {this.state.pelaaja.email}</p>
                    <p><span className="tiedot">Puhelinnumero:</span>{this.state.pelaaja.puhnro}</p>
                <p><span className="tiedot">Lempiruoka:</span> {this.state.pelaaja.lempiruoka}</p>
                    <p><span className="tiedot">Lisätietoa:</span>{this.state.pelaaja.info}</p>

                </div>
                </div>
            </div>
            <MuokkaaPelaajaa lomake = {this.props.match.params.id}/>
        </div>
            ) : (
                <div>Ladataan...</div>
            )

        );
    }
}

export default Pelaajakortti;