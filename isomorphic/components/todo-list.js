import React from 'react';
import Todo from './todo';

export default ({ todos, onTodoClick }) => {
  return (
    <ul>
      {
        todos.map((todo) =>
          <Todo
            key={ todo.id }
            todo={ todo }
            onClick={ onTodoClick }
          />
        )
      }
    </ul>
  );
};
