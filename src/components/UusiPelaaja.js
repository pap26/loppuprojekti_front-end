import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';


class UusiPelaaja extends Component {

    pelaajaBlanko = {
        etunimi: '',
        sukunimi: '',
        numero: '',
        pelipaikka: '',
        email: '',
        puhnro: '',
        syntymaaika: '',
        lisatietoa: '',

    };

    constructor(props) {
        super(props);

        this.state = {
            blanko: this.pelaajaBlanko
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'uusi') {
            const pelaaja = await (await fetch('/api/pelaaja/${this.props.match.params.id}')).json();
            this.setState({blanko: pelaaja});
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let blanko = {...this.state.blanko};
        blanko[name] = value;
        this.setState({blanko});

    }

    async handleSubmit(event) {
        event.preventDefault();
        const {blanko} = this.state;

        await fetch('/api/pelaaja', {
            method: (blanko.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blanko),
        });
       this.props.history.push('/pelaajat');
    }

    render() {

        const {blanko} = this.state;
        const otsikko = <h2>{blanko.id ? 'Muokkaa tietoja' : 'Lisää pelaaja'}</h2>;

        return <div>
            {otsikko}
            <form className="uusipelaaja" onSubmit={this.handleSubmit}>
                <label htmlFor="etunimi">Etunimi:</label>
                <input
                    name="etunimi"
                    id="etunimi"
                    type="text"
                    value={blanko.etunimi || ''}
                    onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor="sukunimi">Sukunimi:</label>
                <input
                    name="sukunimi"
                    id="sukunimi"
                    type="text"
                    value={blanko.sukunimi || ''}
                    onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor="numero">Pelinumero:</label>
                <input
                    name="numero"
                    id="numero"
                    type="number"
                    value={blanko.numero || ''}
                    onChange={this.handleInputChange}/>
                <br/>
               <label htmlFor="pelipaikka">Pelipaikka:</label>
                <select
                    name="pelipaikka"
                    id="pelipaikka"
                    value={blanko.pelipaikka || ''}
                    onChange={this.handleInputChange}>
                    <option value="hyokkaaja">Hyökkääjä</option>
                    <option value="puolustaja">Puolustaja</option>
                    <option value="maalivahti">Maalivahti</option>
                    <option value="keskikenttapelaaja">Keskikenttäpelaaja</option>
                </select>

                <br/>
                <label htmlFor="email">Sähköposti:</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    value={blanko.email || ''}
                    onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor="syntymaaika">Syntymäaika:</label>
                <input
                    name="syntymaaika"
                    id="syntymaaika"
                    type="date"
                    value={blanko.syntymaaika || ''}
                    onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor="lisatietoa">Lisätietoa:</label>
                <textarea
                    name="lisatietoa"
                    id="lisatietoa"
                    value={blanko.lisatietoa || ''}
                    onChange={this.handleInputChange}/>

                <button type = 'submit'>Tallenna</button>{' '}
                <button href="/pelaajat">Peruuta</button>
            </form>
        </div>
    }
}

export default withRouter(UusiPelaaja);