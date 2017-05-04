import React from 'react';
// an react component can render other react components

// in order to get props of a component in a component, we can use props.children

//use props.children to get the text and the nested component <Heart> within <Button>
class App extends React.Component {
  render(){
    return <Button> I <Heart /> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span> &hearts; </span>
  }
}

export default App
