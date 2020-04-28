import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import coronaImg from './images/image.png';

class App extends Component {
	state = {
		data: {},
		country: ''
	}

    async componentDidMount() {
		const data = await fetchData();
		this.setState( { data } );
	}

	handleChange = async (country) => {
		this.setState( {
			data: await fetchData( country ),
			country
		})
	}

	render () {
		const { data, country } = this.state;
		return (
			<div className={ styles.container }> 
				<img className={ styles.image } src={ coronaImg } alt="COVID-19"/>
				<Cards data={ data } />
				<CountryPicker handleChange={ this.handleChange }/>
				<Chart data={ data } country={ country }/>
			</div>
		)
	}
}

export default App;