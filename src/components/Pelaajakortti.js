import React, { Component } from 'react';

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
                <h3>{this.state.pelaaja.etunimi} {this.state.pelaaja.sukunimi} </h3>
                <h3>{this.state.pelaaja.numero}</h3>
                <div className="pelaaja_ruutu">
                <div className="pelaaja_img"><img src={this.state.pelaaja.kuvapolku} alt="pelaajan kuva"  /></div>
                
                <div className="syntymaaika">
                    <p><strong>Pelipaikka:</strong> {this.state.pelaaja.pelipaikka}</p>
                <p><strong>Syntymäpäivä:</strong> {this.state.pelaaja.syntymaaika}</p>
                    <p><strong>Sähköposti: </strong> {this.state.pelaaja.email}</p>
                    <p><strong>Puhelinnumero: </strong> {this.state.pelaaja.puhnro}</p>
                <p><strong>Lempiruoka: </strong> {this.state.pelaaja.lempiruoka}</p>
                    <p><strong>Lisätietoa: </strong> {this.state.pelaaja.info}</p>

                </div>
            </div>
        </div>
            ) : (
                <div>Ladataan... ehkä ikuisesti?</div>
            )



        );
    }
}

export default Pelaajakortti;