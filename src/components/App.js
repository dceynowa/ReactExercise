import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';


class App extends Component {
  
  myTasks = [
    {done: true, text: 'Study React'},
    {done: false, text: 'Go for a walk'}
  ]
  
  render() {
    return (
      <div>
        <ToDoList title='My stuff' tasks={this.myTasks}/>
      </div>
    );
  }
}

export default App;
