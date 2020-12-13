import React from 'react';
import './todo-list-item.scss';

export function TodoListItem(props) {
  const todo = props.todo
  return (
    <div key={todo.id} className={todo.category + ' todo-list-item'}>
          <div className='todo-time'>{todo.time}</div>
          <div className="todo-content">{todo.desciprion}</div>
    </div>
  );
}
