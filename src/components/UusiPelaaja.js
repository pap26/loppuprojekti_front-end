import React, {Component} from 'react';
import axios from "axios";


class UusiPelaaja extends Component {

    state = {
        etunimi: '',
        sukunimi: '',
        numero: ''
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

    handleSubmit = event => {
        event.preventDefault();

        const uusipelaaja = {
            etunimi: this.state.etunimi,
            sukunimi: this.state.sukunimi,
            numero: this.state.numero
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

                    <button type='submit'>Tallenna</button>
                </form>
            </div>
        )
    }
}

export default UusiPelaaja;