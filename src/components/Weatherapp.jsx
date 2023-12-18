import { useState } from "react";
import axios from "axios";

const Weatherapp = () => {
  const [userCity, setUserCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = () => {
    const APIkey = "dfbe9e2443f7d15039258e895705c58f";
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${APIkey}`;

    setLoading(true);
    axios
      .get(endpoint)
      .then((res) => {
        setWeatherData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="parent mx-auto container row">
      <div className="child mt-2   col-md-12 col-lg-6">
        <strong className="text-white">Forecast</strong>
        <span className="location float-end p-2 rounded ">
          <span className="text-white fw-bold">
            {" "}
            <i
              className="bi bi-geo-alt-fill fw-bold "
              style={{ fontFamily: "cursive" }}
            ></i>
            current Location
          </span>{" "}
          <br /> <span className="fw-bold text-white">Nigeria</span>
        </span>
        <div className="">
          <h5 className="welcome text-white text-center mt-19">
            Welcome To all Weather forecast
          </h5>
          <input
            className=" form-control text-white bg-transparent fw-bold w-75 mx-auto"
            type=""
            placeholder="Enter Location"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
            }}
          />{" "}
          <br />
        </div>
      </div>

      <div
        className=" user-list col-lg-5 border shadow-lg rounded mt-2"
            id="secSide"
      >
        
        {loading && <p>Loading...</p>}

        {weatherData && (
          <div className="" id="display">
            <div>
              <label htmlFor="" className="">
                Weather In........
              </label>
              <br />
              <br />
              <h2>{weatherData.name}</h2>
            </div>
            <hr />
            <div>
              <label htmlFor="" className="">
                Weather Description:
              </label>
              <h2>{weatherData.weather[0].description}</h2>
            </div>
            <hr />

            <div>
              <label htmlFor="" className="">
                Temperature:
              </label>
              <h2>{Math.round(weatherData.main.temp - 273)}°C</h2>
            </div>
            <hr />

            <div>
              <label htmlFor="" className="">
                Humidity:
              </label>
              <h2>{weatherData.main.humidity}%</h2>
            </div>
            <hr />

            <div>
              <label htmlFor="" className="">
                Wind Speed:
              </label>
              <h2>{weatherData.wind.speed} m/s</h2>
            </div>
            <hr />

            <div>
              <label htmlFor="" className="">
                Pressure:
              </label>
              <h2>{weatherData.main.pressure} hPa</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weatherapp;
