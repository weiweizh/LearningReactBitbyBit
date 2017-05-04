import React from 'react';

// using ReactDOM
//class App extends React.Component{
//  render(){
//    return React.createElement('h1',null, 'Hello World')
//     }
//  }


// using JSX syntax

class App extends React.Component{
   render(){
      return <h1>Hello World</h1>
      }
    }
//-----------------------------------------
// the above two method can have state within component while the const below cannot have

// using const
//const App = () => <h1>Hello stateless</h1>

export default App
