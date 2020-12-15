import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    value: new Date().getTime()
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {  setSelectedDate } = calendarSlice.actions;
export const selectCalendarDate = state =>state.calendar.value;
export default calendarSlice.reducer;
