import React, {Component } from 'react';
import Todo from './Todo';

const todos = [
  { id: 1, text: 'Купить хлеба', done: false },
  { id: 2, text: 'Купить молока', done: true },
  { id: 3, text: 'Отдать зачетку', done: false },
  { id: 4, text: 'Прыгнуть с парашютом', done: false },
  { id: 5, text: 'Закрыть счет в банке', done: true }
];

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { newTodo: '', todos }
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    const list = this.state.todos.map(t => <Todo text={t.text} done={t.done} key={t.id}/>);
    return (
      <section>
        <section>
          <input type='text' value={this.state.newTodo} onChange={this.onChange}/>
          <button onClick={this.onAdd}>Add</button>
        </section>
        <section>
          {list}
        </section>
      </section>
    );
  }

  onChange(event) {
    this.setState({newTodo: event.target.value});
  }

  onAdd() {
    this.setState({newTodo: ''});
    const todoObject = {
      id: todos.length + 1,
      text: this.state.newTodo,
      done: false
    };
    this.setState({
      todos: [
        ...this.state.todos,
        todoObject
      ]
    })
  }
}

export default TodoList;