import React, {Component} from 'react';
import City from "./City.js";
import Community from "./Community.js";
import ReactDOM from 'react-dom';
import trash from './trash.png';
import edit from "./edit.png";
import CityComp from "./CityComp.js";
import WorldMap from "./WorldMap.png";
import './Account.css';


class CommunityComp extends Component {
	constructor(props) {
		 super(props); 
		 this.state = {
		 	cityController: new Community(),
		 	// inputCityName: "",
		 	// inputLatitude: 0,
		 	// inputLongitude: 0,
		 	// inputPopulation: 0,
		 	// sum: 0,
		 	// highest: 0,
		 	// lowest: 0,
		 	// sphere: "",
		 	// city: new City(),
		 	displayEditCity: false,
		 	whichCity: "",
		 }
	}

	componentDidMount() {
		this.cityController = this.state.cityController;
		this.setState({cityController: this.cityController});
		console.log("Component did mount");
	}

	createNewCity = () => {
		this.cityController.createCity(this.state.inputCityName, Number(this.state.inputLatitude), Number(this.state.inputLongitude), Number(this.state.inputPopulation));
		// console.log("The City name is: ", this.state.inputCityName, "The Latitude is: ", this.state.inputLatitude, "The Longitude is: "this.state.inputLongitude, "The population is: ", this.state.inputPopulation);
		console.log("The City array: ", this.cityController);
		this.setState({});
		this.setState({cityController: this.cityController});
	}

	removeCity = (cityID) => {
		this.cityController.deleteCity(cityID);
		this.setState({cityController: this.cityController});
	}

	showEditCity = (cityID) => {
		let x = this.cityController.findCityIndex(cityID);
		this.setState({cityController: this.cityController});
		this.setState({whichCity: this.state.cityController.community[x]});
		this.setState({displayEditCity: true})
	}

	getPopulationTotal = () => {
		let sum = this.cityController.getPopulation();
		console.log("The total of the population is: ", sum);
		return sum;
		console.log("The total of the whole population is: ", sum );
	}

	peopleMovedOut = (cityID) => {
		let a= this.state.whichCity.cityID;
    	let x = Number(document.getElementById("inputValue").value);
    	console.log("The number of people moved out city: ", x);
    	this.cityController.community[a].movedOut(x);
    	this.setState({cityController: this.cityController});
    }

    peopleMovedIn = (cityID) => {
    	let a= this.state.whichCity.cityID;
    	let x = Number(document.getElementById("inputValue").value);
    	console.log("The number of moved in city: ", x);
    	this.cityController.community[a].movedIn(x);
    	this.setState({cityController: this.cityController});
    }
 
	handleChange = (event) => {
		const {name , value} = event.target;
		this.setState({[name]: value});
	}

	render(){ 			 
		const list = this.state.cityController.community.map((a , b) => {
			return (
				<tr key = {b} >
				<td>{this.state.cityController.community[b].cityName}</td>
				<td>{this.state.cityController.community[b].latitude}</td>
				<td>{this.state.cityController.community[b].longitude}</td>
				<td>{this.state.cityController.community[b].population}</td>
				<td>{this.state.cityController.community[b].cityID}</td>
				<td><button>
                <img src={trash} 
                      id = 'remove' 
                      alt= "remove" 
                      className = "Open_Book" 
                      name = 'remove' 
                      //the cityId on onClick needs to be like below because we are telling it that the parameters of this cityId needs to be deleted
                      onClick = {(cityID) => this.removeCity(this.state.cityController.community[b].cityID)} /> 
                </button>&nbsp;&nbsp;
                </td>
                <td><button>   
                <img src={edit} 
                      id = 'edit' 
                      alt= "edit" 
                      className = "Open_Book" 
                      name = 'edit' 
                      //the cityId on onClick needs to be like below because we are telling it that the parameters of this cityId needs to be deleted
                      onClick = {(cityID) => this.showEditCity(this.state.cityController.community[b].cityID)} /> 
                </button>
            	</td>
				</tr>
				);
		})

		return (
			<div id = "background">
		{/*	<img src={WorldMap} alt="logo" />*/}
			
			<h1>Hello, from Community!</h1>
			<br /><br />
			<h2>The Population Total is: {this.state.cityController.getPopulation()} People, 
			The Northen City is: {this.state.cityController.getMostNorthern().cityName}, 
			The Southern City is: {this.state.cityController.getMostSouthern().cityName} </h2>
			<table align="center">
			<tbody>
			<tr>
			<td>CityName</td>
			<td>Latitude</td>
			<td>Longitude</td>
			<td>Population</td>
			</tr>
			<td><input 
            	id = 'inputCityName'
                type = 'text' 
                placeholder = 'CityName' 
                name = 'inputCityName' 
                onChange = {this.handleChange}
            /></td>
            <td><input   
            	id = 'inputLatitude'
                type = 'number' 
                placeholder = 'Latitude' 
                name = 'inputLatitude' 
                onChange = {this.handleChange}
            /></td>
         	<td><input  
            	id = 'inputLongitude'
                type = 'number' 
                placeholder = 'Longitude' 
                name = 'inputLongitude' 
                onChange = {this.handleChange}
            /></td>
        	<td><input  
            	id = 'inputPopulation'
                type = 'number' 
                placeholder = 'Population' 
                name = 'inputPopulation' 
                onChange = {this.handleChange}
            /></td>
         	<td><button type = 'button' 
            	id = 'okAddNewCity'
            	onClick ={this.createNewCity} > Submit 
            </button></td>
            	{list} 
            </tbody>	
			</table>
            <br /><br />
            <div>
			<br /><br />
			
	  		{/*<h2>The Sphere is {this.state.cityController.whichSphere()} </h2>*/}
		
			{this.state.displayEditCity ? <CityComp 
				city = {this.state.whichCity} 
				cityBackUp = {this.state.cityController}
				passFunctionOfMovedIn = {this.peopleMovedIn}
				passFunctionOfMovedOut = {this.peopleMovedOut}
				/> : null}
			</div>
			</div> 
			);
	}
}

export default CommunityComp;


// getNorth = () => {
	// 	let highest = this.cityController.getMostNorthern();
	// 	console.log("The city in North is: ", highest);
	// 	// this.setState({highest: highest});
	// 	return highest;
	// }

	// getSouth = () => {
	// 	let lowest = this.cityController.getMostSouthern();
	// 	console.log("The city in South is: ", lowest);
	// 	// this.setState({lowest: lowest});
	// 	return lowest;
	// }

	// getSphere = () => {
	// 	let sphere = this.cityController.whichSphere();
	// 	console.log("The Sphere is: ", sphere);
	// 	this.setState({sphere: sphere});
	// 	return sphere;
	// }