import React from 'react';

export default function ForecastList({ weatherList }) {
  function kelvinToFarenheit(kelvins) {
    const temp = ((kelvins - 273.15) * 9) / 5 + 32;

    return Math.trunc(temp);
  }
  return (
    <div className="forecast-list">
      {weatherList.map((daily) => (
        <div key={daily.dt}>
          {daily.dt}: {kelvinToFarenheit(daily.temp.day)}
        </div>
      ))}
    </div>
  );
}
