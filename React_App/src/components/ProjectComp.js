// ProjectComp.js

import React from 'react';
// import project.py

class ProjectComp extends React.Component {
	constructor() {
        super();
        this.state = {
          // json: [],
        	json1: [],
          json2: [],
          querycomp : 0
        }
      }

  componentDidMount() {
        // return fetch("http://localhost:5000/student/")
        // .then(result => result.json())
        // .then(json => this.setState({json: json}))
        // .catch((err => console.log("The error is: ", err)))

      }
  competencyDetails = () => {
    let queryname = document.getElementById('inputname').value
    // console.log(queryname)
    // this.setState({name : queryname })
    fetch('http://localhost:5000/searchCompNumber/' + String(queryname))
      .then(result => result.json())
      // .then(json => this.setState ({json: json}))
    .then(json => this.setState ({json1: json.master , json2: json.comp}))
    .catch((err => console.log('err', err)))
    // console.log('test name in input*****************************', this.state.json2, this.state.json1)
  }

studentRemove = () => {
  console.log('Hello')
  let queryname = document.getElementById('inputname').value
  console.log("name",queryname )
  fetch('http://localhost:5000/remove', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    console.log('Student Has Been Deleted')
    this.setState({json: []})
    document.getElementById('inputname').value = ''
    return "Student Deleted"
}
compNumberRemove = () => {
  console.log('Hello')
  let queryname = document.getElementById('inputname').value
  console.log("Competency Number:", queryname)
  fetch('http://localhost:5000/removeCompNumber', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    console.log('Competency Has Been Deleted')
    // this.setState({json: []})
    this.setState({json2: []})
    document.getElementById('inputname').value = ''
    return "Competency Deleted"
}

editComp = async () => {
  console.log('Hello edit comp')
  let queryname = document.getElementById('inputname').value
  let querycomp = Number(document.getElementById('inputcomp').value)
  console.log('Test', querycomp, queryname)
  await fetch('http://localhost:5000/editcomp', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname,
      comp: querycomp
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    await this.studentDetails()
    // console.log('Student Has Been edited')
    // this.setState({querycomp: querycomp})
    // console.log('state', this.state.compdisplay)
    // return "Student Deleted"

}

editCompName = async () => {
  console.log('Hello Edit Comp Name')
  let queryname = document.getElementById('inputname').value
  let querycompName = document.getElementById('inputcompName').value
  console.log('Test Edit the Comp Name', querycompName, queryname)
  await fetch('http://localhost:5000/editCompName', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname,
      comp: querycompName
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    await this.competencyDetails()
}
editUnitsOfEffort = async () => {
  console.log('Hello Edit Units Of Effort')
  let queryname = document.getElementById('inputname').value
  let queryUnitOfEffort = document.getElementById('inputUnitOfEffort').value
  console.log('Test Edit the Comp Name', queryUnitOfEffort, queryname)
  await fetch('http://localhost:5000/editUnitsOfEffort', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname,
      comp: queryUnitOfEffort
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    await this.competencyDetails()
}

editPercentageCompleted = async () => {
  console.log('Hello Edit Percentage Completed')
  let queryname = document.getElementById('inputname').value
  let queryPercentageCompleted = document.getElementById('inputPercentageCompleted').value
  console.log('Test Edit the Comp Name', queryPercentageCompleted, queryname)
  await fetch('http://localhost:5000/editPercentageCompleted', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: queryname,
      comp: queryPercentageCompleted
    })
  })
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    await this.competencyDetails()
}
       render() {

        // console.log("test /////////", this.state.json)
       console.log("test //////////////////////", this.state.json1, this.state.json2)

    let files = this.state.json1;
    let list = files.map((a, b) => {
      
      return (
        <td className= "list" key={b}>
 {/*      <tr>Student Name: {a.First_Name} {a.Last_Name}</tr>
          <tr>LinkedIn: <a href={a.LinkedIn} target="blank">{a.LinkedIn}</a></tr>
          <tr>Git Hub: <a href={a.GitHub} target="blank">{a.GitHub}</a></tr>
          <tr>Project: {a.Project}</tr>
          <tr>Competency: {a.Competency}</tr>
          <tr>Percentage Complete: </tr>
          <button className='button2' type='button' onClick={this.studentRemove}>Delete</button>*/}
          <tr>||Student Name: {a.First_Name} {a.Last_Name}, Comp No: {a.Project}||</tr>
  {/*     <tr>Competency Name: {a.Competency_Name}</tr>
          <input id='inputcompName' placeholder= {this.state.querycompName}></input> 
          <button className='button2' onClick={this.editCompName}>Edit</button>
          <tr>Competency Number: {a.Competency_Number}</tr>
          <tr>Units of Effort: {a.Units_Effort}</tr>
          <input id='inputUnitOfEffort' placeholder= {this.state.queryUnitOfEffort}></input>
          <button className='button3' onClick={this.editUnitsOfEffort}>Edit</button>
          <tr>Percent Completed: % {a.Percent_Complete} </tr>
          <input id='inputPercentageCompleted' placeholder= {this.state.queryPercentageCompleted}></input>
          <button className='button4' onClick={this.editPercentageCompleted}>Edit</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='button2' type='button' onClick={this.compNumberRemove}>Delete</button>
          */}
        </td>
      )
    })  
    let files2 = this.state.json2;
    let list2 = files2.map((c,d) => {
      return (
        <td className= "list" key={d}>
 

           <tr>Competency Name: {c.Competency_Name}</tr>
          <input id='inputcompName' placeholder= {this.state.querycompName}></input> 
          <button className='button2' onClick={this.editCompName}>Edit</button>
          <tr>Competency Number: {c.Competency_Number}</tr>
          <tr>Units of Effort: {c.Units_Effort}</tr>
          <input id='inputUnitOfEffort' placeholder= {this.state.queryUnitOfEffort}></input>
          <button className='button3' onClick={this.editUnitsOfEffort}>Edit</button>
         <tr>Percent Completed: % {c.Percent_Complete} </tr>
          <input id='inputPercentageCompleted' placeholder= {this.state.queryPercentageCompleted}></input>
          <button className='button4' onClick={this.editPercentageCompleted}>Edit</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button className='button2' type='button' onClick={this.compNumberRemove}>Delete</button>
          
        </td>
      )
    })

       	return (
      	 <div>
        <h2>HELLO from Project Comp</h2>
{/*       <input id= 'inputname' placeholder="Enter First Name"></input>
        <button className='button2' type="button" id='search' onClick= {this.studentDetails} >Search</button>
        <input id='inputcomp' placeholder= {this.state.querycomp}></input>
        <button className='button2' onClick={this.editComp}>Edit</button>*/}
        <input id= 'inputname' placeholder="Enter Competency Number"></input>
        <button className='button2' type="button" id='search' onClick= {this.competencyDetails} >Search</button>
       

        <table id= 'table' align="center">
          <tbody>
            <tr align='left'>{list}</tr>
            <tr align='left'>{list2}</tr>
          </tbody>
        </table>

       
      {/*Change the place of the button and input box*/}
      </div>
      		);
      }
};
export default ProjectComp;
