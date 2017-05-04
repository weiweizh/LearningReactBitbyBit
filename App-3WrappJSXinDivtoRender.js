import React from 'react';
// Using div to wrapp more than two JSX
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>Hellow World</h1>
        <b>Bold</b>
      </div>
      )
  }
}

// The below code will give error, check the javascript translated below
/*class App extends React.Component{
  render(){
    return  <h1>Hellow World</h1><b>Bold</b>
    // equals return React.createElement('',,) React.createElement('',,)  

  }
}*/

export default App
