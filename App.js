import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { DateTime } from "luxon";
import { NavigationContainer } from "@react-navigation/native";

import { getPublicEvents } from "./src/services/EventService";
import {
  getWeatherLocal,
  getWeatherWenham,
} from "./src/services/WeatherService";
import colors from "./Colors";
import NavBar from "./src/components/NavBar";

const App = (props) => {
  const [localWeatherData, setLocalWeatherData] = useState({});
  const [gordonWeatherData, setGordonWeatherData] = useState({});
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    EventWeatherCall();
  }, []);

  const EventWeatherCall = async () => {
    setLoading(true);
    let tempWeather = await getWeatherLocal();
    let tempEvents = await getPublicEvents();
    let gordonWeather = await getWeatherWenham();
    const now = DateTime.now();
    const then = DateTime.now().plus({ days: 9 });
    setLocalWeatherData(tempWeather);
    setGordonWeatherData(gordonWeather);
    setEvents(
      tempEvents.filter(
        (e) =>
          new Date(e.Occurrences[0].StartDate).getTime() > now &&
          new Date(e.Occurrences[0].StartDate).getTime() < then
      )
    );
    setLoading(false);
  };

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
          localWeatherData={localWeatherData}
          gordonWeatherData={gordonWeatherData}
          events={events}
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
