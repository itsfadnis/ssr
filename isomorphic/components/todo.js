import React from 'react';

export default ({ todo, onClick }) => {
  return (
    <li
      onClick={() => onClick(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      { todo.text }
    </li>
  );
};
