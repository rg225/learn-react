import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Person-1', age: 22},
      {name: 'Person-2', age: 23},
      {name: 'Person-3', age: 24},
    ]
  }

  // changeDetails() { --- } will not work
  changeDetails = () => {
    this.setState({
      persons: [
        {name: 'Person-5', age: 32},
        {name: 'Person-6', age: 43},
        {name: 'Person-7', age: 54},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I am react app</h1>
        <button onClick={this.changeDetails}>Click to remove</button>
        <Person name={this.state.persons[0].name} salary={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} salary={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} salary={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
