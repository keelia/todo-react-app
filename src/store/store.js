import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../components/todo-list/todos.reducer';
import weatherReducer from '../components/weather-forecast/weather-forecast.reducer';
import calendarReducer from '../components/calendar/calendar.reducer';

export default configureStore({
  reducer: {
    weather:weatherReducer,
    todos:todosReducer,
    calendar:calendarReducer
  },
});
