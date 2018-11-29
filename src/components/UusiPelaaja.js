import React, {Component} from 'react';
import axios from "axios";


class UusiPelaaja extends Component {
    state = {
        etunimi: '',
        sukunimi: '',
        numero: '',
        pelipaikka: '',
        syntymaaika:'',
        email:'',
        puhnro: '',
        info: '',
        kuvapolku:'',


    }

    handleEtunimiChange = (e) => {
        this.setState({etunimi: e.target.value})
    }

    handleSukunimiChange = (e) => {
        this.setState({sukunimi: e.target.value})
    }

    handleNumeroChange = (e) => {
        this.setState({numero: e.target.value})
    }

    handleSyntymaaikaChange = (e) => {
        this.setState({syntymaaika: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePuhnroChange = (e) => {
        this.setState({puhnro: e.target.value})
    }

    handleInfoChange = (e) => {
        this.setState({info: e.target.value})
    }

    handlePelipaikkaChange = (e) => {
        this.setState({pelipaikka: e.target.value})
    }

    handleKuvapolkuChange = (e) => {
        this.setState({kuvapolku: e.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const uusipelaaja = {
            etunimi: this.state.etunimi,
            sukunimi: this.state.sukunimi,
            numero: this.state.numero,
            pelipaikka: this.state.pelipaikka,
            email: this.state.email,
            puhnro: this.state.puhnro,
            syntymaaika: this.state.syntymaaika,
            info: this.state.info,
            kuvapolku: this.state.kuvapolku,
        };

        axios.post(`http://localhost:8080/api/pelaaja/`, uusipelaaja)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.props.paivita();
    }

    render() {
        return (
            <div className={"LomakeAdd"}>

                <form className="upelaaja" onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="etunimi">Etunimi:</label></td>
                        <td><input
                            name="etunimi"
                            id="etunimi"
                            type="text"
                            onChange={this.handleEtunimiChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="sukunimi">Sukunimi:</label></td>
                        <td> <input
                            name="sukunimi"
                            id="sukunimi"
                            type="text"
                            onChange={this.handleSukunimiChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="numero">Numero:</label></td>
                        <td> <input
                            name="numero"
                            id="numero"
                            type="text"
                            onChange={this.handleNumeroChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="pelipaikka">Pelipaikka:</label></td>
                        <td>  <select
                            name="pelipaikka"
                            id="pelipaikka"
                            onChange={this.handlePelipaikkaChange}>
                            <option value="maalivahti">Veskari</option>
                            <option value="toppari">Toppari</option>
                            <option value="laitapuolustaja">Laitapuolustaja</option>
                            <option value="keskikenttapelaaja">Keskikenttäpelaaja</option>
                            <option value="hyökkääjä">Hyökkääjä</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="syntymaaika">Syntymaaika:</label></td>
                        <td> <input
                            name="syntymaaika"
                            id="syntymaaika"
                            type="date"
                            onChange={this.handleSyntymaaikaChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Sähköposti:</label></td>
                        <td>  <input
                            name="email"
                            id="email"
                            type="email"
                            onChange={this.handleEmailChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="puhnro">Puhelinnumero:</label></td>
                        <td> <input
                            name="puhnro"
                            id="puhnro"
                            type="text"
                            onChange={this.handlePuhnroChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="kuvapolku">Kuvapolku:</label></td>
                        <td> <input
                            name="kuvapolku"
                            id="kuvapolku"
                            type="text"
                            onChange={this.handleKuvapolkuChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="info">Esittely:</label></td>
                        <td> <textarea
                            name="info"
                            id="info"
                            onChange={this.handleInfoChange}/>
                        </td>
                    </tr>
                </table>
                    <button className="btn btn-light" type='submit'>Tallenna</button>
                </form>
            </div>
        )
    }
}

export default UusiPelaaja;