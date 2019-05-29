import React, {Component} from 'react';
import City from "./City.js";
import Community from "./Community.js";

class CityComp extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			city: "",
			inputValue: '',
		 }
		 console.log("The props are: ", this.props);
	}

	componentDidMount() {
        // console.log(props);
        this.city = new City(this.props.cityName, this.props.latitude, this.props.longitude, this.props.population);
        this.setState({city: this.city});
      }

	handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

	render() {
		let cityID = this.props.city.cityID;
		return (
			<div>
			<h1> Hello, from City! </h1>

			<h2>City Name: {this.props.city.cityName} </h2>
            <div class = "left-half">
                <h2>City Latitude: {this.props.city.latitude} </h2>
                <h2>City Longitude: {this.props.city.longitude} </h2>
                <h2>The Sphere is {this.props.cityBackUp.whichSphere(cityID)} </h2>
            </div>
            <div class = "right-half">

            <h2>City Population: {this.props.city.population} </h2>
            <h2>How big City: {this.props.city.howBig()} </h2>
            <h2>
            <input 	id = 'inputValue'
                    type = 'number' 
                    placeholder = "Population" 
                    name = 'inputValue' 
                    onChange = {this.handleChange}
            	/>&nbsp;&nbsp;
            <button type = 'button' 
            		id = 'movedIn'
            		onClick ={this.props.passFunctionOfMovedIn} > Moved In </button> &nbsp;&nbsp;
            <button type = 'button' 
            		id = 'movedOut'
            		onClick ={this.props.passFunctionOfMovedOut} > Moved Out </button>
            </h2>
			</div> </div>
			)
	}

};
export default CityComp;

    
    // peopleMovedOut = (cityID) => {
    // 	let x = Number(this.state.inputValue);
    // 	console.log("The number of people moved out city: ", x);
    // 	this.city.movedOut(x);
    // 	this.setState({city: this.city});
    // }

    // peopleMovedIn = (cityID) => {
    // 	let x = Number(this.state.inputValue);
    // 	console.log("The number of moved in city: ", x);
    // 	this.state.city.movedIn(x);
    // 	this.setState({city: this.city});
    // }
