import * as geo from "expo-location";

/**
 * Gets all weather through ten day period
 *
 * @returns {Weather {}} the weather object containing the weather for ten days
 */
 const getWeather = async () => {
  let { status } = await geo.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }
  const location = await geo.getCurrentPositionAsync({});
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8068adab923042f5a86143638222801&q=${location.coords.latitude} ${location.coords.longitude}&days=10&aqi=no&alerts=no`
  );
  const weather = await response.json();
  return weather;
};

export { getWeather };