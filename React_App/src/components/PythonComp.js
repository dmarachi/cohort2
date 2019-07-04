// pythonComp.js

import React from 'react';
// import database_report.py
// import './Account.css';

class PythonComp extends React.Component {
	constructor() {
        super();
        this.state = {
        	json: [],
        }
      }

      componentDidMount() {
        return fetch("http://localhost:5000/info/")
        .then(result => result.json())
        .then(json => this.setState({json: json}))
        .catch((err => console.log("The error is: ", err)))

      }

       render() {

       	let files = this.state.json;

       	let list = files.map((a, b) => {
       		return (
       			<tr className = "list" key = {b}>
       			<td> {a.CustomerName}</td>
       			<td> {a.Address}</td>
       			<td> {a.Phone}</td>
       			</tr>
       			)
       	})

       	return (
      		<div>
      		<table id = "table" align = "center">
      		<body>
      		<tr align = "left"> {list}</tr>
      		</body>
      		</table>

      		</div>


      		);
      }
};

export default PythonComp;
