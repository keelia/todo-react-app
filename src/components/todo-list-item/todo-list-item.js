import React from 'react';
import { get24DisplayTimeFromDateObj } from '../../lib/dateFormater';
import './todo-list-item.scss';

export function TodoListItem(props) {
  const todo = props.todo
  return (
    <div key={todo.id} className={todo.category + ' todo-list-item'}>
          <div className='todo-time'>{get24DisplayTimeFromDateObj(new Date(todo.datetime))}</div>
          <div className="todo-content">{todo.desciprion}</div>
    </div>
  );
}
