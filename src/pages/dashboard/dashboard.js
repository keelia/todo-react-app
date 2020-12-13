import React from 'react';
import { WeatherForecast } from '../../components/weather-forecast/weather-forecast';
import { DailyTimeline } from '../../components/daily-timeline/daily-timeline';
import  './dashboard.scss';
import { Calendar } from '../../components/calendar/calendar';
import { TodoList } from '../../components/todo-list/todo-list';

export function Dashboard() {
  return (
    <div className="dashboard">
       <div  className="daily-weather">
          <WeatherForecast></WeatherForecast>
        </div>
        <div  className="daily-tasks">
          <DailyTimeline></DailyTimeline>
        </div>
        <div   className="tasks-calendar">
          <Calendar></Calendar>
        </div>
        <div  className="tasks-overview">
          <TodoList></TodoList>
        </div>
  </div>
  );
}