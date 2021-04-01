import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am react app</h1>
        <Person name="Person1" salary="5000" > And I work somewhere </Person>
        <Person name="Person2" salary="6000" />
        <Person name="Person3" salary="7000" />
      </div>
    );
  }
}

export default App;
