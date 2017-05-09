import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => <h1> Hello stateless </h1>;

class App extends React.Component{
   constructor(){
     super();
     this.state = {items: []}
   }

   update(){

   }

   componentWillMount(){
     fetch('http://swapi.co/api/people/?format = json')
     .then(response => response.json())
     .then(({results: items}) => this.setState({items}))
   }

 filter(e){
   this.setState({filter: e.target.value})
   console.log(this.state.filter)
 }
  render(){
    let items = this.state.items
    if(this.state.filter){
      items = items.filter(ite =>
        ite.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
      <input type="text"
      onChange={this.filter.bind(this)}/>

      {items.map(ite =>
        <Person key = {ite.name} person={ite}/> )}
      </div>
      )
    }


}

const Person = (props) => <h1>{props.person.name}</h1>

export default App
