import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getPublicEvents } from "./src/services/event";
import { getWeather } from "./src/services/weather";
import { DateTime } from "luxon";

const App = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState({});

  useEffect(() => {
    EventWeatherCall();
  }, []);

  const EventWeatherCall = async () => {
    setLoading(true);
    let tempWeather = await getWeather();
    let tempEvents = await getPublicEvents();
    const now = DateTime.now();
    const then = DateTime.now().plus({ days: 9 });
    setWeatherData(tempWeather);
    setEvents(tempEvents.filter(
      (e) =>
        new Date(e.Occurrences[0].StartDate).getTime() > now &&
        new Date(e.Occurrences[0].StartDate).getTime() < then
    ));
    setLoading(false);
  }


  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{events[0].Event_Title}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAC2D6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
