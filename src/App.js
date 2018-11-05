import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import ToDoEditForm from './components/ToDoEditForm/ToDoEditForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px; 
    margin-top: 14px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path='/' component={ToDoList}/>
          <Route path='/tasks/:itemId' component={ToDoEditForm}/>
        </Container>
      </Router>
    )
  }
}

export default App;
