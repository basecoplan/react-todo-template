import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <section>
        <Menu>
          <span>Home</span>
          <span>About</span>
        </Menu>
        <TodoList />
      </section>
    );
  }
}

export default App;
