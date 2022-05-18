import React from 'react';

export default function ForecastList({ weatherList }) {
  function kelvinToFahrenheit(kelvins) {
    const temp = ((kelvins - 273.15) * 9) / 5 + 32;

    return Math.trunc(temp);
  }

  function day(time) {
    const fullDate = new Date(time * 1000);
    const date = fullDate.toDateString();

    return date;
  }
  return (
    <div className="forecast-list">
      {weatherList.map((daily) => (
        <div key={daily.dt}>
          {day(daily.dt)}: {kelvinToFahrenheit(daily.temp.day)}°F
        </div>
      ))}
    </div>
  );
}
