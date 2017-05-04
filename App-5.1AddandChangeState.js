import React from 'react';
// state within component can be changed by the component, and user input. While props cannot be changed.
class App extends React.Component {
  constructor(){
    // super() will give the keyword 'this' the context of this component, rather than its parents' component
    super();
    this.state = {
      txt: 'this is state txt',
      cat: 0
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return(
      <div>
          <input type="text"
             onChange = {this.update.bind(this)}/>

          <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
      )
  }

}


export default App
