import React from 'react';

class App extends React.Component {
  render(){
    return(
      <Parent>
        <div className="childA"></div>

      </Parent>
      )
  }
}

class Parent extends React.Component{
  render(){
    // different react methods to read child components
  //  console.log(this.props.children)
  // 1. let items = React.Children
  //  .map(this.props.children, child => child)
  // 2. let items = React.Children.toArray(this.props.children)
  //3. let items = React.Children.forEach(this.props.children, child=> console.log(child.props.className))
let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App
