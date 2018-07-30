import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newItem: ''
    };

    this.formSumit = this.formSumit.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.getTodos = this.getTodos.bind(this);
  }

  inputOnChange(event) {
    this.setState({ newItem: event.target.value });
  }

  formSumit(event) {
    event.preventDefault();

    console.error = (function (_error) {
      return function (message) {
        if (typeof message !== 'string' || message.indexOf('component is `contentEditable`') === -1) {
          _error.apply(console, arguments)
        }
      }
    })(console.error)


    if (!this.state.newItem.length) {
      alert('Please add your todo item.');

    } else {

      let todos = this.state.todos;
      todos.push({ id: Date.now(), text: this.state.newItem });

      this.setState({ newItem: '', todos });
    }

    event.target.reset();
  }

  getTodos() {
    return this.state.todos.map((todoItem, index) => {
      return (
        <li
          className="todo-list__item"
          id={todoItem.id}
          key={index}
        >
          <span 
            key={index}
            contentEditable="true"
          >
            {todoItem.text}
          </span>

          <button onClick={this.deleteTodoItem}>&times;</button>
        </li>
      );
    });
  }

  deleteTodoItem (e) {
    e.target.parentNode.remove();
  }

  render() {
    return (
      <div className="container">
        <h3 className="todo-heading">Todo List</h3>
        <ol className="todo-list">{this.getTodos()}</ol>
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

export default App;
