import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => <h1> Hello stateless </h1>;
const HOC = (InnerComponent) => class extends React.Component{
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  componentWillMount(){
    console.log("component will mount")
  }
  render(){
    console.log("this props: " + this.props.children)
    return (
      <InnerComponent
       {...this.props}
       {...this.state}
       update = {this.update.bind(this)}
      />
      )
  }
}
class App extends React.Component{

  render(){

    return (
      <div>
        <Button>button </Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
      )
    }


}

const Button = HOC((props) =>
       <button onClick ={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component{
  componentWillMount(){
    console.log('lable will mount')
  }
  render(){
    return (
      <label onMouseMove = {this.props.update}>
       {this.props.children} - {this.props.count}
      </label>
      )
  }
}

const LabelHOC = HOC(Label)

export default App
