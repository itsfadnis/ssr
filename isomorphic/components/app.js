import React, { Component } from 'react';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos || []
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: new Date().getTime(),
          text,
          completed: false
        }
      ]
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    });
  }

  render() {
    return (
      <main>
        <h1>
          Todos
        </h1>
        <TodoForm
          onSubmit={ this.addTodo }
        />
        <TodoList
          todos={ this.state.todos }
          onTodoClick={ this.toggleTodo }
        />
      </main>
    );
  }
}
