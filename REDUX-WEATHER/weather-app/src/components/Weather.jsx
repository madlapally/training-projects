import React, { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import {
  fetchWeatherDataFailure,
  fetchWeatherDataRequest,
  fetchWeatherDataSuccess,
} from "../redux/action-creators/WeatherActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col } from "react-bootstrap";

function Weather() {
  const cityRef = useRef();

  const apiKey = "6dfe24a4482f0b9b8553a65b481fde30";
  const dispatch = useDispatch();
  const store = useSelector((state) => state.WeatherApp);

  const fetchWeatherData = () => {
    dispatch(fetchWeatherDataRequest());
    const city = cityRef.current.value || "Warangal";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric}`
      )
      .then((response) => {
        const weatherData = response.data;
        console.log(weatherData);
        dispatch(fetchWeatherDataSuccess(weatherData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherDataFailure(errorMsg));
      });
    cityRef.current.value = "";
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1 className="app-name mt-3">
        Weather App<span>🌤</span> 
      </h1>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            className="city-search"
            id="cityInput"
            placeholder="Search City.."
            name="query"
            ref={cityRef}
          />
        </div>

        <>
          <br />
          <Col>
            <Button type="submit" variant="outline-dark">
              Search
            </Button>
          </Col>
        </>

        {store?.weatherData?.sys && (
          <div>
            <div className="city-name mt-3">
              <h2 style={{color:"white"}}>
                {store.weatherData.name},{" "}
                <span>{store.weatherData.sys.country}</span>
              </h2>
            </div>

            <div className="icon-temp">
              <img
                className=""
                src={`https://openweathermap.org/img/wn/${store.weatherData.weather[0].icon}@2x.png`}
                alt={store.weatherData.weather[0].description}
              />
              {Math.round(store.weatherData.main.temp)}
              <sup className="deg">&deg;C</sup>
            </div>
            <div className="des-wind">
              <p style={{color:"white"}}>{store.weatherData.weather[0].description.toUpperCase()}</p>
              <p style={{color:"white"}}>Wind Speed: {store.weatherData.wind.speed}m/s</p>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Weather;