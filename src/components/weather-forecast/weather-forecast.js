import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './weather-forecast.scss';
import sunny from "../../assets/icons/sunny.svg";
import cloudy from "../../assets/icons/cloudy.svg";
import foggy from "../../assets/icons/foggy.svg";
import windy from "../../assets/icons/windy.svg";
import { getWeatherAsync, selectWeather } from './weather-forecast.reducer';
import { useDispatch } from 'react-redux';
import { kToC } from '../../lib/temperatureConverter';
import MediaQuery from 'react-responsive';

export function WeatherForecast() {

  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();

  function getWeatherIcon(weatherDescription){
    const isCloudy = (des)=>(des && des.toLowerCase().includes('cloud'))
    const isFoggy = (des)=>(des && des.toLowerCase().includes('fog'))
    const isWindy = (des)=>(des &&  des.toLowerCase().includes('wind'))
    if(isCloudy(weatherDescription)){
      return cloudy;
    }else if(isFoggy(weatherDescription)){
      return foggy
    }else if(isWindy(weatherDescription)){
      return windy
    }
    return sunny;
  }

  function getTemperatureDisplay(temperature){
    return kToC(temperature).toFixed(0)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async function(position) {
        dispatch(getWeatherAsync(position.coords.latitude,position.coords.longitude))
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  });
  const hasTemperatureData = (weather.temperature !== null)&&  (Math.abs(Number(weather.temperature) - 273.15) > Number.EPSILON)

  let content
  if(hasTemperatureData){
    content = <div className="temperature">
    { getTemperatureDisplay(weather.temperature) }°C
  </div>
  }else{
    content = <div className="temperature">
    Loading...
  </div>
  }

  return (
    <div className="weather-forecast">
        <MediaQuery minDeviceWidth={992}>
          <div className="weather-icon">
            <img src={getWeatherIcon(weather.shortDes)} alt={sunny}/>
          </div>
        { content }
        { hasTemperatureData && 
            <div  className="short-description">
              {weather.shortDes}
            </div> }
        </MediaQuery> 
        <MediaQuery maxDeviceWidth={991.98}>
          <div className="weather-icon">
            <img src={getWeatherIcon(weather.shortDes)} alt={sunny}/>
          </div>
        { content }
        </MediaQuery> 
    </div>
    
  );
}
