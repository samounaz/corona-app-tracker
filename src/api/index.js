import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async( country ) => {
 
	try {
		const modifiedUrl = country ? `${url}/countries/${country}` : url;
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get( modifiedUrl );
		return { confirmed, recovered, deaths, lastUpdate } ;

	} catch (error) {
		console.error( error );
	}

}

export const fetchDailyData = async () => {
	
	try {
		const { data } = await axios.get( `${url}/daily` );
		return data.map( dailyData => ( {
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate
		}));
		
	} catch (error) {
		console.error( error );
	}
}

export const fetchCountries = async() => {

	try {
		const { data: { countries } } = await axios.get( `${url}/countries` );
		return countries.map(country => country.name);
		
	} catch (error) {
		
	}
}
