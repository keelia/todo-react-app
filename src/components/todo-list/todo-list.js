import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos} from './todos.reducer';
import './todo-list.scss';
import { MdAddCircle } from 'react-icons/md';
import { AddTodoModal } from './add-todo/add-todo';
import { Button } from 'react-bootstrap';
import { selectCalendarDate } from '../calendar/calendar.reducer';
export function TodoList() {
  const allTodos = useSelector(selectTodos);
  const [modalShow, setModalShow] = useState(false);
  const calendarActivatedDate = useSelector(selectCalendarDate);
  function  getTodoDisplayStatusName(status){
      switch (status) {
        case 'all':
          return 'All Tasks'
        case 'completed':
          return 'Completed'
        case 'postponed':
            return 'Postponed'
        case 'undone':
            return 'Undone'
        default:
            return
      }
  }
  const summary = ['completed','postponed','undone','all'].map(status=>({
    status,
    displayName:getTodoDisplayStatusName(status),
    taskNum:allTodos.filter(todo=>(status === 'all' ? true : todo.status === status)).length
  }))
  return (
    <div className="todo-overview">
      <ul className="todo-list">
          { summary.map((cat)=>(<li className={cat.status} key={cat.status}>
             <div className="task-cat">
              <span className="task-cat-name">{cat.displayName}</span>
                <span className="task-cat-num">{cat.taskNum}</span>
             </div>
            </li>))}
      </ul>
      <div className="d-block d-sm-none add-todo">
        <Button id="addTodoBtn" >Add</Button>
      </div>
      <div id="addTodoIcon" className="d-none d-sm-block">
        <MdAddCircle variant="primary"  onClick={() => setModalShow(true)}/>
      </div>
        <AddTodoModal tododate={calendarActivatedDate} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
