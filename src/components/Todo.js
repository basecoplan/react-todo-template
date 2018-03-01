import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDone: props.done
    }

    this.handleClick = this.handleClick.bind(this);

    this.style = {
      fontSize: '24px'
    }
  }

  render() {
    let taskString = this.state.isDone
      ? <span>Сделано</span>
      : <span>Не сделано</span>;
    return (
      <section className={this.state.isDone ? 'Todo-done':'Todo-undone'} onClick={this.handleClick}>
        <p style={this.style}>{this.props.text}</p>
        {taskString}
      </section>
    );
  }

  handleClick() {
    this.setState({isDone: !this.state.isDone})
  }
}

export default Todo;