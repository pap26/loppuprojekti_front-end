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
        };

        axios.post(`http://localhost:8080/api/pelaaja/`, uusipelaaja)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className={"LomakeAdd"}>
                <form className="uusipelaaja" onSubmit={this.handleSubmit}>
                    <label htmlFor="etunimi">Etunimi:</label>
                    <input
                        name="etunimi"
                        id="etunimi"
                        type="text"
                        onChange={this.handleEtunimiChange}/>
                    <br/>
                    <label htmlFor="sukunimi">Sukunimi:</label>
                    <input
                        name="sukunimi"
                        id="sukunimi"
                        type="text"
                        onChange={this.handleSukunimiChange}/>
                    <br/>
                    <label htmlFor="numero">Numero:</label>
                    <input
                        name="numero"
                        id="numero"
                        type="text"
                        onChange={this.handleNumeroChange}/>
                    <br/>
                    <label htmlFor="pelipaikka">Pelipaikka:</label>
                    <select
                        name="pelipaikka"
                        id="pelipaikka"
                        onChange={this.handlePelipaikkaChange}>
                        <option value="maalivahti">Veskari</option>
                        <option value="toppari">Toppari</option>
                        <option value="laitapuolustaja">Laitapuolustaja</option>
                        <option value="keskikenttapelaaja">Keskikenttäpelaaja</option>
                        <option value="hyökkääjä">Hyökkääjä</option>
                    </select>
                    <br/>
                    <label htmlFor="syntymaaika">Syntymaaika:</label>
                    <input
                        name="syntymaaika"
                        id="syntymaaika"
                        type="date"
                        onChange={this.handleSyntymaaikaChange}/>

                    <br/>
                    <label htmlFor="email">Sähköposti:</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={this.handleEmailChange}/>
                    <br/>
                    <label htmlFor="puhnro">Puhelinnumero:</label>
                    <input
                        name="puhnro"
                        id="puhnro"
                        type="text"
                        onChange={this.handlePuhnroChange}/>


                    <br/>
                    <label htmlFor="info">Esittely:</label>
                    <textarea
                        name="info"
                        id="info"
                        onChange={this.handleInfoChange}/>

                    <button type='submit'>Tallenna</button>
                </form>
            </div>
        )
    }
}

export default UusiPelaaja;