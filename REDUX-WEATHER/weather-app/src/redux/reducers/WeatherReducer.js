import {
    FETCH_WEATHER_DATA_FAILURE,
    FETCH_WEATHER_DATA_REQUEST,
    FETCH_WEATHER_DATA_SUCCESS,
  } from "../action-types/ActionTypes";
  
  export const initialState = {
    weatherData: {},
    isLoading: false,
    error: null,
    
  };
  
  export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case FETCH_WEATHER_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          weatherData: action.payload,
          error: null,
        };
  
      case FETCH_WEATHER_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          weatherData: {},
          error: action.payload,
        };
  
      default:
        return state;
    }
  };