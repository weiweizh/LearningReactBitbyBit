import React from 'react';
// In react, a component can also render another component (it can render JSX)
class App extends React.Component {
  constructor(){
    // super() will give the keyword 'this' the context of this component, rather than its parents' component
    super();
    this.state = {
      txt: 'this is state txt',
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }
/*
  render(){
    return(
      <div>
          <h1>{this.state.txt}</h1>
          <input type="text"
             onChange = {this.update.bind(this)}/>


      </div>
      )
  } */

  // the child component can update the state in its parent component
  render(){
    return(
      <div>
          <h1>{this.state.txt}</h1>
          <Widget update ={this.update.bind(this)} />
          <Widget update ={this.update.bind(this)} />
      </div>
     )
    }
  }
/*
const Widget = (props) =>
     <input type = "text" onChange = {this.update.bind(this)} />
*/
const Widget = (props) =>
     <input type = "text" onChange = {props.update} />

export default App
