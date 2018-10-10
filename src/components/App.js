import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList title="My stuff" />
      </div>
    );
  }
}

export default App;
