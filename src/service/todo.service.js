
export default class TodoService {
  static loadTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.map(td => ({id: td.id, text: td.title})));
  }
}