import React from 'react';
// const App is stateless
class App extends React.Component{
  render(){
    return <Title text="1122" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

export default App
