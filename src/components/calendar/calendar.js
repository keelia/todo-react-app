import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate} from './calendar.reducer';
import './calendar.scss';
import {Calendar as ReactCalendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { selectTodos } from '../todo-list/todos.reducer';
import { getDateObjFromDateStr } from '../../lib/dateFormater';

export function Calendar() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [activatedDate, setActivatedDate] = useState(new Date());
  const tileClassName=  ({ date, view }) => {
    //check if has task
    const hasTodo = todos.some(todo=>{
      let d1 = getDateObjFromDateStr(todo.date)
      d1.setHours(0,0,0,0)
      return d1.getTime() === date.getTime()
    })

    const cls = view === 'month' && hasTodo ? ['has-todo'] : null

    if(cls){
      //check todo status
      const matchedTodos = todos.filter(todo=>{
        let d1 = getDateObjFromDateStr(todo.date)
        d1.setHours(0,0,0,0)
        return d1.getTime() === date.getTime()
      })
      if(matchedTodos.length > 1){
          cls.push('multiple-todos')
      }else{
          cls.push(matchedTodos[0].status)
      }
    }
    return cls
  }

  function onChange(selectedDate){
    setActivatedDate(selectedDate)
    dispatch(setSelectedDate(selectedDate.toLocaleDateString()))
  }

  return (
    <div className="calendar">
      <ReactCalendar 
        calendarClassName="responsive-calendar" 
        onChange={onChange} tileClassName={tileClassName}
        shouldHighlightWeekends
        value={activatedDate} />
    </div>
  );
}
