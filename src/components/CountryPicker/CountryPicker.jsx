import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleChange }) => {

	const [countries, setCountries] = useState([]);

	useEffect( () => {
		const fetchApi = async () => {
			const countries = await fetchCountries();
			setCountries( countries );
		}
		fetchApi();
	}, [ setCountries ] );
	
	const displayOptions = countries.map( (country, index) => <option key={ index } value={ country }>{ country }</option>)

	return (
		<div>
			<FormControl className={styles.formControl}>
				<NativeSelect  onChange={(e) => handleChange(e.target.value)} >
					<option value=''>Global</option>
					{ displayOptions }
				</NativeSelect>
			</FormControl>
		</div>
	)
}

export default CountryPicker;
