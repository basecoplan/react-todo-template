import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDone: false
    }

    this.done = this.done.bind(this);

    this.style = {
      fontSize: '24px'
    }
  }

  render() {
    let taskString = this.state.isDone
      ? <span>Сделано</span>
      : <span>Не сделано</span>;
    return (
      <section className={this.state.isDone ? 'Todo-done':'Todo-undone'} onClick={this.done}>
        <p style={this.style}>{this.props.todo.text}</p>
        <section>
          {taskString}
        </section>
        <button onClick={() => this.props.delete(this.props.todo.id)}>Delete</button>
      </section>
    );
  }

  done() {
    this.setState({isDone: !this.state.isDone})
  }
}

export default Todo;