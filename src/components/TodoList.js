import React, {Component } from 'react';
import Todo from './Todo';

const todos = [
  { id: 1, text: 'Купить хлеба' },
  { id: 2, text: 'Купить молока' },
  { id: 3, text: 'Отдать зачетку' },
  { id: 4, text: 'Прыгнуть с парашютом' },
  { id: 5, text: 'Закрыть счет в банке' }
];

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { newTodo: '', todos }
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
  }

  render() {
    const list = this.state.todos.map(t => <Todo todo={t} key={t.id} delete={this.onDelete}/>);
    return (
      <section>
        <section>
          <input type='text' value={this.state.newTodo} onChange={this.onChange}/>
          <button onClick={this.onAdd}>Add</button>
          <button onClick={this.onChangeTodo}>Change first</button>
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
      id: this.state.todos.length + 1,
      text: this.state.newTodo
    };
    this.setState({
      todos: [
        ...this.state.todos,
        todoObject
      ]
    })
  }

  onChangeTodo() {
    const todo = this.state.todos[0];
    todo.text = "changed";
    this.setState({
      todos: [...this.state.todos]
    });
  }

  onDelete(id) {
    const index = this.state.todos.findIndex(t => t.id === id);
    const copy = [...this.state.todos];
    copy.splice(index, 1);
    this.setState({todos: copy});
  }
}

export default TodoList;