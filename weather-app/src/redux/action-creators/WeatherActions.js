import {
    FETCH_WEATHER_DATA_FAILURE,
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
  } from "../action-types/ActionTypes";
  
  export const fetchWeatherDataRequest = () => {
    return {
      type: FETCH_WEATHER_DATA_REQUEST,
    };
  };
  
  export const fetchWeatherDataSuccess = (weatherData) => {
    return {
      type: FETCH_WEATHER_DATA_SUCCESS,
      payload: weatherData,
    };
  };
  
  export const fetchWeatherDataFailure = (error) => {
    return {
      type: FETCH_WEATHER_DATA_FAILURE,
      payload: error,
    };
  };