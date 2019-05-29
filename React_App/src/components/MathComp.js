import React, {Component} from 'react';
import Maths from './math.js';
import './Math.css';
import Sub from './Sub.jpg';
import Add from './Add.jpg';
import Divid from './Divid.jpg';
import Multiply from './Multiply.jpg';

class MathComp extends Component {
	constructor() {
        super()
        this.state = {
          number1: '',
          number2: '',
          result: 0,
        }
      }

  settingState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  }
  
  math = (event) => {
    const x = event.target.name;
    const y = Number(this.state.number1);
    const z = Number(this.state.number2);

    console.log(x);
    console.log(y);
    console.log(z);

    switch(x) {
      case 'Add': this.setState({result: Maths.sum(y, z)});
      break;

      case 'Subtract': this.setState({result: Maths.sub(y, z)});
      break;

      case 'Multiply': this.setState({result: Maths.multiply(y, z)});
      break;

      case 'Divid': this.setState({result: Maths.divid(y, z)});
      break;
    }
  }
    render() {
          return (
          	<div>
        
	          	<h1> Hello, from Calculator! </h1>
	          <br /><br />
            <div class = "calculatorcard" >
                <input  className = 'input1' 
                        type = 'text' 
                        placeholder = 'number-1' 
                        value = {this.state.number1} 
                        name = 'number1' 
                        onChange = {this.settingState} />
                <input  className = 'input2' 
                        type = 'text' 
                        placeholder = 'number-2' 
                        value = {this.state.number2} 
                        name = 'number2' 
                        onChange = {this.settingState} />
                <br /><br />
               {/* <button type = 'button' id = '0' name = 'Add' onClick = {this.math}>Sum</button>*/}
                <button>
                <img className = "Open_Book" src = {Add} name = 'Add' onClick= {this.math}  alt = "add" />
                </button> &nbsp;&nbsp;
               {/* <button type = 'button' id = '1' name = 'Subtract' onClick = {this.math}>Subtract</button>*/}
                 <button>
                <img className = "Open_Book" src = {Sub} name = 'Subtract' onClick= {this.math}  alt = "sub" />
                </button> &nbsp;&nbsp;
              {/*  <button type = 'button' id = '2' name = 'Multiply' onClick = {this.math}>Multiply</button>*/}
                 <button>
                <img className = "Open_Book" src = {Multiply} name = 'Multiply' onClick= {this.math}  alt = "multiply" />
                </button> &nbsp;&nbsp;
              {/*  <button type = 'button' id = '3' name = 'Divid' onClick = {this.math}>Divid</button>*/}
                 <button>
                <img className = "Open_Book" src = {Divid} name = 'Divid' onClick= {this.math}  alt = "divid" />
                </button> &nbsp;&nbsp;
                <br /><br />
              {/*readOnly is added in inputtext 3 because it is readOnly and the app will not give any more warrning or error if added*/}
               <input className = 'input3' type = 'text' placeholder = 'resultNumber' 
                readOnly value = {this.state.result} />
              </div>
          	 </div>
             
          	);
      }
  };

export default MathComp;



