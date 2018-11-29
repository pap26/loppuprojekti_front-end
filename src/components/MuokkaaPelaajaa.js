import React, {Component} from 'react';
import axios from "axios";


class MuokkaaPelaajaa extends Component {

    state = {
            etunimi: '',
            sukunimi: '',
            numero: '',
            pelipaikka: '',
            syntymaaika: '',
            email: '',
            puhnro: '',
            lempiruoka: '',
            info: '',
            kuvapolku: '',

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
    handleLempiruokaChange = (e) => {
        this.setState({lempiruoka: e.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const paivitys = {
            etunimi: this.state.etunimi,
            sukunimi: this.state.sukunimi,
            numero: this.state.numero,
            pelipaikka: this.state.pelipaikka,
            email: this.state.email,
            puhnro: this.state.puhnro,
            syntymaaika: this.state.syntymaaika,
            lempiruoka: this.state.lempiruoka,
            info: this.state.info,
            kuvapolku: this.state.kuvapolku,
        };

        let id = this.props.pelaaja.id;
        axios.put(`http://localhost:8080/api/pelaaja/lisaa/${id}`, paivitys)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
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
                                placeholder={this.props.pelaaja.etunimi}
                                onChange={this.handleEtunimiChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="sukunimi">Sukunimi:</label></td>
                            <td> <input
                                name="sukunimi"
                                id="sukunimi"
                                type="text"
                                placeholder={this.props.pelaaja.sukunimi}
                                onChange={this.handleSukunimiChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="numero">Numero:</label></td>
                            <td> <input
                                name="numero"
                                id="numero"
                                type="text"
                                placeholder={this.props.pelaaja.numero}
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
                                placeholder={this.props.pelaaja.email}
                                onChange={this.handleEmailChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lempiruoka">Lempiruoka:</label></td>
                            <td>  <input
                                name="lempiruoka"
                                id="lempiruoka"
                                type="text"
                                placeholder={this.props.pelaaja.lempiruoka}
                                onChange={this.handleLempiruokaChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="puhnro">Puhelinnumero:</label></td>
                            <td> <input
                                name="puhnro"
                                id="puhnro"
                                type="text"
                                placeholder={this.props.pelaaja.puhnro}
                                onChange={this.handlePuhnroChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="kuvapolku">Kuvapolku:</label></td>
                            <td> <input
                                name="kuvapolku"
                                id="kuvapolku"
                                type="text"
                                placeholder={this.props.pelaaja.kuvapolku}
                                onChange={this.handleKuvapolkuChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="info">Esittely:</label></td>
                            <td> <textarea
                                name="info"
                                id="info"
                                placeholder={this.props.pelaaja.info}
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



export default MuokkaaPelaajaa;