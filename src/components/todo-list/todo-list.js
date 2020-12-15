import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos} from './todos.reducer';
import './todo-list.scss';
import { AddTodoModal } from './add-todo/add-todo';
import { selectCalendarDate } from '../calendar/calendar.reducer';
import MediaQuery,{ useMediaQuery } from 'react-responsive';
import {Col,Row} from 'react-bootstrap';
import { MdAddCircle } from 'react-icons/md';

export function TodoList() {
  const allTodos = useSelector(selectTodos);
  const [modalShow, setModalShow] = useState(false);
  const calendarActivatedDate = useSelector(selectCalendarDate);
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  function  getTodoDisplayStatusName(status){
      switch (status) {
        case 'all':
          return isTabletOrMobileDevice ? 'All' :'All Tasks'
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
      <MediaQuery minDeviceWidth={992}>
        <Row>
          <Col>
            <ul className="todo-list">
                { summary.map((cat)=>(<li className={cat.status} key={cat.status}>
                  <div className="task-cat">
                    <span className="task-cat-name">{cat.displayName}</span>
                      <span className="task-cat-num">{cat.taskNum}</span>
                  </div>
                  </li>))}
            </ul>
          </Col>
          <Col lg={2} xl={2}>
            <MdAddCircle id="addTodoIcon" variant="primary"  onClick={() => setModalShow(true)}/>
          </Col>
        </Row>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={991.98}>
          <Row>
            <Col xs={10} sm={8}>
              <ul className="todo-list row">
                  { summary.map((cat)=>(<li className={cat.status} key={cat.status}>
                    <div className="task-cat">
                    {cat.displayName}({cat.taskNum})
                    </div>
                    </li>))}
              </ul>
            </Col>
            <Col xs={2} sm={4}>
              <MdAddCircle id="addTodoIcon" variant="primary"  onClick={() => setModalShow(true)}/>
            </Col>
          </Row>
        </MediaQuery> 
        <AddTodoModal tododate={calendarActivatedDate} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
