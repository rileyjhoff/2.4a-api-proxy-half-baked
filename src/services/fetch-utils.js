export async function getPokemonData(search) {
  const rawResponse = await fetch(`./netlify/functions/pokemon?search=${search}`);
  const data = await rawResponse.json();

  return data;
}

export async function getYelpData(search) {
  const rawResponse = await fetch(`./netlify/functions/yelp?search=${search}`);
  const data = await rawResponse.json();

  return data;
}

export async function getWeatherData(search) {
  const rawResponse = await fetch(`./netlify/functions/weather?search=${search}`);
  const data = await rawResponse.json();

  return data;
}
