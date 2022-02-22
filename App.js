import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DateTime } from "luxon";
import { NavigationContainer } from "@react-navigation/native";

import { getPublicEvents } from "./src/services/EventService";
import {
  getWeatherLocal,
  getWeatherWenham,
} from "./src/services/WeatherService";
import colors from "./Colors";
import NavBar from "./src/components/NavBar";

const App = () => {
  const [localWeatherData, setLocalWeatherData] = useState({});
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState([]);

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
      let tmpDateRange = [];
      
      for (let i = 0; i < 10; i++) {
        tmpDateRange.push(DateTime.now().plus({ days: i}));
      }
      const now = tmpDateRange[0];
      const then = tmpDateRange[9];

      setDateRange(tmpDateRange);

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
        let startDate = new Date(eventData[i].Occurrences[0].StartDate)
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
              gordonEvents.push([eventData[i], hourWeather, DateTime.fromJSDate(startDate, "local"), i]);
            }
          }
        }
      }

      setLocalWeatherData(localWeather);
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
        <NavBar localWeatherData={localWeatherData} events={events} dateRange={dateRange} />
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
