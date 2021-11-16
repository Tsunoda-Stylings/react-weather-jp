import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li className="weekday">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="humidity">湿度: {props.data.humidity}%</li>
              <li className="wind">風速: {Math.round(props.data.wind)} km/h</li>
              <li className="text-capitalize description">
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="col-sm-3 mt-5">
            <WeatherIcon code={props.data.icon} size={100} />
          </div>
          <div className="col-sm-3 mt-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </h2>
    </div>
  );
}
