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
  render() {
    // const list = todos.map(t => <Todo text={t.text} done={t.done} key={t.id}/>);
    var list = [];
    for(var i = 0; i < todos.length; ++i) {
      var t = todos[i];
      var component = <Todo text={t.text} done={t.done} key={t.id}/>;
      list.push(component);
    }
    
    
    return (
      <section>
        {list}
      </section>
    );
  }
}

export default TodoList;