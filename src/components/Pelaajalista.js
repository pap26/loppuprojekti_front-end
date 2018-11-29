import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UusiPelaaja from "./UusiPelaaja";

class Pelaajalista extends Component {

    constructor(props) {
        super(props);
        this.state = {pelaajat: []};
        this.remove = this.remove.bind(this);
    }

    paivita = () => {
        console.log("jee päivitettiin pelaajalista");
        this.haePelaaja();
        this.setState(this.state);
    }

    //GET pelaajalista
    haePelaaja = () => {
        fetch('api/pelaajat')
            .then(response => response.json())
            .then(data => this.setState({pelaajat: data}));
    }

    componentDidMount() {
        this.setState();
        this.haePelaaja();
    }

    //DELETE
    async remove(id) {
        await fetch(`/api/pelaaja/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let paivitettyJoukko = [...this.state.pelaajat].filter(i => i.id !== id);
            this.setState({pelaajat: paivitettyJoukko});
        });
    }

    render() {

        const {pelaajat} = this.state;
        const pelaajalista = pelaajat.map(pelaaja => {
            const pelaajanimi = `${pelaaja.etunimi} ${pelaaja.sukunimi}`;
            var url = '/pelaajakortti/' + pelaaja.id;  //annetaan pelaajakortin linkki
            return (
                <div key={pelaaja.id}>
                    <div className="pelaaja_ruutu">


                        <Link to={url} type="hidden">
                            <div className="pelaaja_img"><img src={pelaaja.kuvapolku} alt="pelaajan kuva"/></div>
                        </Link>

                        <div className="pelinumero_box pelinro_asemointi">{pelaaja.numero}</div>
                        <div className="pelaajannimi_box">
                            <div className="pelaajannimi" name={pelaaja.id}>
                                <span className="linkki">{pelaajanimi}</span>
                            </div>
                        </div>

                     <div className="pelaaja_napit">
                        <button className="flat_button silver-button" onClick={() => this.remove(pelaaja.id)}>Poista</button> 
                    </div>

                    </div>
                </div>)

        });

        return (
            <div>
                <h3>Pelaajat</h3>

                <div className="flexpalstat">{pelaajalista} </div>

                <div className="lohko">
                    <h4>Lisää pelaaja</h4>
                    <div className="pelaajalomake">
                        <UusiPelaaja paivita={this.paivita}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Pelaajalista;