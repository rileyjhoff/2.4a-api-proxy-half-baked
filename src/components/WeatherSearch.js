import { useState } from 'react';
import { getWeatherData } from '../services/fetch-utils';

export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [weatherList, setWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('portland');

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const weatherData = await getWeatherData(search);
    // put the jsonified data in state and set the loading state to false
    setWeatherList(weatherData);
    setIsLoading(false);
  }

  return (
    <section className="weather">
      {/* make the fetch on submit */}
      <form>
        Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
