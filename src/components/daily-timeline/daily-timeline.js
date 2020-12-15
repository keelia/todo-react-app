import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCalendarDate } from "../calendar/calendar.reducer";
import'./daily-timeline.scss';
import {IoArrowDownCircleOutline,IoArrowUpCircleOutline  } from 'react-icons/io5';
import {GiNightSleep} from "react-icons/gi";
import { selectTodos } from '../todo-list/todos.reducer';
import { getDayNameFromDateObj, getMonthNameFromDateObj } from '../../lib/dateFormater';
import { TodoListItem } from '../todo-list-item/todo-list-item';

export function DailyTimeline() {
  const allTodos = useSelector(selectTodos);
  const selectedDate = useSelector(selectCalendarDate);
  const MaxDisplayTaskNum = 4
  let selectedDateObj = new Date(selectedDate)
  const dailyTasks = allTodos.filter(todo=>{
    let todoDate = new Date(todo.datetime)
    todoDate.setHours(0,0,0,0)
    selectedDateObj.setHours(0,0,0,0)
    return todoDate.getTime() === selectedDateObj.getTime()
  })
  //sort daily tasks by time
  dailyTasks.sort((a,b)=>(a.datetime - b.datetime))

  const hiddenTasksNum = dailyTasks.length - MaxDisplayTaskNum
  const noTask = dailyTasks.length === 0

  const [showAllTodos, setShowAllTodos] = useState(false)

  return (
    <div className="daily-timeline">
      <div className="today-info">
          <div className="date">{selectedDateObj.getDate()} {getMonthNameFromDateObj(selectedDateObj)}</div>
          <div className="day">{getDayNameFromDateObj(selectedDateObj)}</div>
      </div>
      {
        dailyTasks.map((todo,todoIndex)=>{
          if(showAllTodos){
            return <TodoListItem key={todo.id} todo={todo}></TodoListItem>
          }else{
            if(todoIndex < MaxDisplayTaskNum){
              return <TodoListItem key={todo.id} todo={todo}></TodoListItem>
            }else{
              return null
            }
          }
  
        })
      }
       {(!showAllTodos && hiddenTasksNum > 0) &&
         <div className="see-more">
          <div className="see-more-btn" onClick={()=>setShowAllTodos(true)}><IoArrowDownCircleOutline/></div>
          <div>show more({ hiddenTasksNum})</div>
        </div>
      }
      {(showAllTodos && hiddenTasksNum > 0) &&
         <div className="see-more">
          <div className="see-more-btn" onClick={()=>setShowAllTodos(false)}><IoArrowUpCircleOutline/></div>
          <div>show less</div>
        </div>
      }
      {!noTask && hiddenTasksNum <= 0 &&
       <div className="end">
         <div className="end-icon"><GiNightSleep/></div>
      </div>
      }
      {noTask &&
       <div className="no-todos">
         No Todos
      </div>
      }
    </div>
  );
}
