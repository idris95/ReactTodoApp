import React from 'react';
import TodoList from './todoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newItem: ''
    };

    this.formSumit = this.formSumit.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    this.setState({ newItem: event.target.value });
  }

  formSumit(event) {
    event.preventDefault();

    console.error = (function(_error) {
      return function(message) {
        if (
          typeof message !== 'string' ||
          message.indexOf('component is `contentEditable`') === -1
        ) {
          _error.apply(console, arguments);
        }
      };
    })(console.error);

    if (!this.state.newItem.length) {
      alert('Please add your todo item.');
    } else {
      let todos = this.state.todos;
      todos.push({ id: Date.now(), text: this.state.newItem });

      this.setState({ newItem: '', todos });
    }

    event.target.reset();
  }

  render() {
    return (
      <div className="todo-wrapper">
        <h3 className="todo-heading">Todo List</h3>

        <TodoList todos={this.state.todos} />

        <div className="todo-controls">
          <form onSubmit={this.formSumit}>
            <input
              className="todo-controls__input"
              placeholder="Add a todo"
              value={this.state.value}
              onChange={this.inputOnChange}
              type="text"
            />
            <button className="todo-controls__submit-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoApp;