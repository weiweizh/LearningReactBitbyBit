import React from 'react';
// state within component can be changed by the component, and user input. While props cannot be changed.
class App extends React.Component {
  constructor(){
    // super() will give the keyword 'this' the context of this component, rather than its parents' component
    super();
    this.state = {
      txt: 'Weiwei',
      cat: 1
    }
  }

  changeTxt(e){
    this.setState({txt: e.target.value})
  }

  changeCat(e){
    this.setState({cat: e.target.value})
  }

  render(){
    return(
      <div>
          <input type="text"
             onChange = {this.changeTxt.bind(this)}/>
          <input type="text"
                onChange = {this.changeCat.bind(this)}/>

          <h1>{this.state.txt} has {this.state.cat} cat(s) </h1>
      </div>
      )
  }

}


export default App
