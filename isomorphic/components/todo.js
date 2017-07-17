import React from 'react';
import classnames from 'classnames';

export default ({ todo, onClick }) => {
  return (
    <li
      className={ classnames('todo', { 'todo-completed': todo.completed }) }
    >
      <input
        type="checkbox"
        id={ `todo-${ todo.id }` }
        className="todo-toggle"
        onChange={() => onClick(todo.id)}
      />
      <label
        htmlFor={ `todo-${ todo.id }` }
      >
        { todo.text }
      </label>
    </li>
  );
};
