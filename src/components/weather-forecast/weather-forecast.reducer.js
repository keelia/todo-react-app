import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: {
          shortDes:null,
          temperature:null
    },
  },
  reducers: {
    updateWeather: (state, action) => {
      const res= action.payload
      state.value =  {
            shortDes:res.weather[0].main,
            temperature:res.main.temp
      };
    },
  },
});
export const { updateWeather} = weatherSlice.actions;
export const selectWeather = state => state.weather.value;
export default weatherSlice.reducer;

export const getWeatherAsync = (lat,lon) =>async  (dispatch,getState) => {
  const stateBefore = getState()
  const weather = stateBefore.weather.value
  const APIkey = '1475586de6f368e44ecbc758ef20d3a5' //Security Warning: in prod this APIkey should not be here!
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
  const res = response.data
  const newWeather = {
    shortDes:res.weather[0].main,
    temperature:res.main.temp
  }
  if((weather.shortDes === newWeather.shortDes) &&(weather.temperature === newWeather.temperature)){
      return
    }
  dispatch(updateWeather(res));
};
