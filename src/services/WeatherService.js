import * as geo from "expo-location";

/**
 * Gets all weather through ten day period from your local location
 *
 * @returns {Weather {}} the weather object containing the weather for ten days
 */
const getWeatherLocal = async () => {
  let { status } = await geo.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }
  const location = await geo.getCurrentPositionAsync({});
  const localWeather = await fetchWeather(location.coords.latitude, location.coords.longitude)
  return localWeather;
};

/**
 * Gets all weather through ten day period for Wenham MA, USA
 *
 * @returns {Weather {}} the weather object containing the weather for ten days
 */
const getWeatherWenham = async () => {
  const wenhamWeather = fetchWeather(42.589440, -70.823560);
  return wenhamWeather;
};

/**
 * Helper method for fetching weather data from API with given latitude and longitude
 * 
 * @param {float} latitude the latitude of the location
 * @param {float} longitude the longitdue of the location
 * 
 * @returns {Promise<Weather{}>} the weather data for that location
 */
const fetchWeather = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8068adab923042f5a86143638222801&q=${latitude} ${longitude}&days=10&aqi=no&alerts=no`
  );
  const weather = await response.json();
  return weather;
};

export { getWeatherLocal, getWeatherWenham };
