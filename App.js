import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DateTime } from "luxon";
import { NavigationContainer } from "@react-navigation/native";
import * as Device from "expo-device";
import { getPublicEvents } from "./src/services/EventService";
import {
  getWeatherLocal,
  getWeatherWenham,
} from "./src/services/WeatherService";
import colors from "./Colors";
import NavBar from "./src/components/NavBar";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gordonDateRange, setGordonDateRange] = useState([]);
  const [localDateRange, setLocalDateRange] = useState([]);

  useEffect(() => {
    const EventWeatherCall = async () => {
      // Set loading so page waits for data
      setLoading(true);

      // Make calls via services
      const localWeather = await getWeatherLocal();
      const tempEvents = await getPublicEvents();
      const gordonWeather = await getWeatherWenham();

      // Set each Gordon event with its corresponding weather
      // Get the 9 day period we are able to pull weather for
      let tmpGordonDateRange = [];
      let tmpLocalDateRange = [];

      let gordonToday;
      let locationToday;
      let timeZone;

      // Android cannot take full advantage of one of my packages unless I eject the project
      // to its native files so I am able to add the latest android build to the build.gradle
      // file
      if (Device.manufacturer == "Apple") {
        timeZone = "America/New_York";
        gordonToday = DateTime.now().setZone(timeZone);
        locationToday = DateTime.now().setZone(localWeather.location.tz_id);
      } else {
        timeZone = "local";
        gordonToday = DateTime.now();
        locationToday = DateTime.now();
      }

      for (let i = 0; i < 10; i++) {
        tmpGordonDateRange.push(gordonToday.plus({ days: i }));
        tmpLocalDateRange.push(locationToday.plus({ days: i }));
      }

      const now = tmpGordonDateRange[0];
      const then = tmpGordonDateRange[9];

      setLocalDateRange(tmpLocalDateRange);
      setGordonDateRange(tmpGordonDateRange);

      // Filter the events to fit between the 9 day period
      const eventData = tempEvents.filter(
        (e) =>
          new Date(e.Occurrences[0].StartDate).getTime() > now &&
          new Date(e.Occurrences[0].StartDate).getTime() < then
      );

      let gordonEvents = [];

      // Loop through the events and match their times with the weather times
      for (let i = 0; i < eventData.length; i++) {
        // Get the start time of the event in seconds from epoch
        let startDate = new Date(eventData[i].Occurrences[0].StartDate);
        let startTime = startDate.getTime() / 1000;

        // Loop through the weather object to find matching epoch
        for (
          let day = 0;
          day < gordonWeather.forecast.forecastday.length;
          day++
        ) {
          for (let hour = 0; hour < 24; hour++) {
            // Define period for what hourly weather should round too.
            // In our case, it will round to the nearest hour (down if equal to 30 minute mark)
            let hourWeather =
              gordonWeather.forecast.forecastday[day].hour[hour];
            let thirtyBefore = hourWeather.time_epoch - 30 * 60;
            let thirtyAfter = hourWeather.time_epoch + 30 * 60;

            if (thirtyBefore < startTime && startTime <= thirtyAfter) {
              // Put "i" into array to have a unique key when developing list
              gordonEvents.push([
                eventData[i],
                hourWeather,
                DateTime.fromJSDate(startDate, timeZone),
                i,
              ]);
            }
          }
        }
      }

      setWeatherData(localWeather);
      setEvents(gordonEvents);
      setLoading(false);
    };

    EventWeatherCall();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <NavBar
          currentWeather={weatherData}
          events={events}
          gordonDateRange={gordonDateRange}
          localDateRange={localDateRange}
        />
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
