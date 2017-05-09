import React from 'react';
// const App is stateless
class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bine(this)
  }

  update(){
    this.setState({val: this.state.val + 1})
  }

  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }

  render(){
    console.log('render')
    return <button onClick = {this.updata}>{this.state.val}</button>
  }
}

export default App
