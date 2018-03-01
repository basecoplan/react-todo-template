import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

export default App;
