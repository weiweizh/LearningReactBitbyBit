import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => <h1> Hello stateless </h1>;

class App extends React.Component{
   constructor(){
     super();
     this.state = {increasing: false}
   }

   update(){
     const new_app = (<App val = {this.props.val + 1} />)
     ReactDOM.render(

       new_app,
       document.getElementById('root')

       )
       console.log("update execute: new App:  " + new_app.props.val + " orginal App: " + this.props.val);
   }

   componentWillReceiveProps(nextProps){
     console.log('componentWillReceiveProps: ' + nextProps.val),
     this.setState({increasing: nextProps.val > this.props.val})
   }

   shouldComponentUpdate(nextProps,nextState){
     console.log(' nextProps: ' + nextProps.val)
     console.log(`shouldComponentUpdate:  ${nextProps.val%2 === 0}`)
     return nextProps.val%2 === 0;
   }

  render(){
    console.log("button rendered: " + this.state.increasing + " current value: " + this.props.val)
    return (
      <button onClick={this.update.bind(this)}>
      {this.props.val}
      </button>
      )
    }
componentDidUpdate(prevProps, prevState){
  console.log(`componentDidUpdate prevProps: ${prevProps.val}`)
  console.log('this props: ' + this.props.val)
}

}

App.defaultProps = {val: 0}

export default App
