import React from 'react';

const TodoList = props => {
  let deleteTodoItem = (e) => {
    return e.target.parentNode.remove();
  }

  return(
    <ol className = "todo-list" >
        {
          props.todos.map((todoItem, index) =>
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

              <button onClick={deleteTodoItem}>&times;</button>
            </li>
          )
        }
    </ol >
  )
};

export default TodoList;
