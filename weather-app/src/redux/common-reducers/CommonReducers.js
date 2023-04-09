import { combineReducers } from "redux";
import { WeatherReducer } from "../reducers/WeatherReducer";

export const CommonReducers = combineReducers({
  WeatherApp: WeatherReducer,
});