 import City from "./City.js";

class Community {
	constructor() {
		this.community = [];
		this.counter = 0;
	}

	createCity(cityName, latitude, longitude, population, cityID) {
        const myCity = new City(cityName, latitude, longitude, population, this.counter++);
		this.community.push(myCity);
		console.log("The Array for the city is ", myCity);
		return this.community;
	}

	deleteCity(cityID) {
		this.community.splice(this.findCityIndex(cityID), 1);
		console.log("The index to delete which city: ", this.findCityIndex(cityID));
		return this.community;
	}

	findCityIndex(i) {
		let x = this.community.findIndex(function(e){return e.cityID === i}); //the one that is working
		return x;
	}
	
	getPopulation() {
		let populationTotal = this.community.reduce((accumulator, currentValue) =>
			accumulator + currentValue.population, 0);
		console.log("The total population is: ", populationTotal);
		return populationTotal;
	}

	whichSphere(cityID) {
		let x = this.findCityIndex(cityID);

		if (this.community[x].latitude > 0) {
			return "North";
		} else if (this.community[x].latitude < 0) {
			return "South";
		} else {
			return "in the middel";
		}
	}

	getMostNorthern() {
		if (this.community.length > 0) {
			const highest = this.community.reduce((city1, city2) => 
				(city1.latitude > city2.latitude) ? city1 : city2);
			return highest;
			} else {
			return "There is no highest city";
		}
	}

	getMostSouthern() {
		if (this.community.length >= 1) { //Always remember to use "x >= 1" for comparing small values
			const lowest = this.community.reduce((city1, city2) => 
				(city1.latitude < city2.latitude) ? city1 : city2);
			return lowest;
			// return lowest.city;
		} else {
			return "There is no lowest city";
		}
	}
}

export default Community;