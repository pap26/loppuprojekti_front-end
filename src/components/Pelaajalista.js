import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UusiPelaaja from "./UusiPelaaja";

class Pelaajalista extends Component {
    constructor(props) {
        super(props);
        this.state = {pelaajat: [], ladataan: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ladataan: true});

        fetch('api/pelaajat')
            .then(response => response.json())
            .then(data => this.setState({pelaajat: data, ladataan: false}));
    }

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
        const {pelaajat, ladataan} = this.state;

        if (ladataan) {
            return <p>Ladataan...</p>;
        }

        const pelaajalista = pelaajat.map(pelaaja => {
            const pelaajanimi = `${pelaaja.etunimi} ${pelaaja.sukunimi}`;
            var url = '/pelaajakortti/' + pelaaja.id;
            return (
                <div key={pelaaja.id} >
                    <div className="pelaaja_ruutu">
                   
                        <Link to={url} type="hidden">
                            <div className="pelaaja_img"><img src={pelaaja.kuvapolku} alt="pelaajan kuva"  /></div>
                        </Link>

                        <div className="pelinumero_box pelinro_asemointi">{pelaaja.numero}</div>
                        <div className="pelaajannimi_box">
                            <div className="pelaajannimi"  name={pelaaja.id}>
                                <span className="linkki">{pelaajanimi}</span>
                            </div>
                        </div>
                     <div className="pelaaja_napit">
                        <button className="btn btn-light" href="/pelaajat/:id">Muokkaa</button>
                        <button className="btn btn-light" onClick={() => this.remove(pelaaja.id)}>Poista</button> 
                    </div>
                    </div>
                </div>)
    
        });

        return (
            <div>
                <h3>Pelaajat</h3>

                {/* <button className="btn btn-light" href="">Lisää pelaaja</button> */}

                <div className="flexpalstat">{pelaajalista} </div>

                <div className="lohko">
                    <h4>Lisää pelaaja</h4>
                    <div className="pelaajalomake">
                    <UusiPelaaja/>
                    </div>
                </div>

            </div>
        );
    }
}
export default Pelaajalista;