import React, { Component } from 'react';
import Navigation from './Navigation.js';

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
            const pelaajanimi = `${pelaaja.etunimi || ''} ${pelaaja.sukunimi || ''}`;
            return <tr key={pelaaja.id}>
                <td>{pelaaja.numero}</td>
                <td>{pelaajanimi}</td>
                <td>{pelaaja.pelipaikka}</td>
                <td>
                        <button href="/pelaajat/:id">Muokkaa</button>
                        <button onClick={() => this.remove(pelaaja.id)}>Poista</button>
                </td>
            </tr>
        });

        return (
            <div>
                    <div className="adminPelaajalista1">
                        <button href="">Lisää pelaaja</button>
                    </div>

                    <h3>Jotain tähän</h3>

                    <table className="adminPelaajalista2">
                        <thead>
                        <tr>
                            <th>Pelinumero</th>
                            <th>Nimi</th>
                            <th>Pelipaikka</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pelaajalista}
                        </tbody>
                    </table>

            </div>
        );
    }
}
export default Pelaajalista;