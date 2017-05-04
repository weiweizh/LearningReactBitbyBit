import React from 'react';

class App extends React.Component{
  render(){
    // get the props of the App that are assigned in index.js
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

//Define app property {name: type|whether required}
App.propTypes = {
  txt: React.PropTypes.string,
  //define the cat property as required
  cat: React.PropTypes.number.isRequired
}

// set default props
App.defaultProps = {
  txt: "this is the default txt"
}
export default App
