import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getPublicEvents } from "./src/services/EventService";
import { getWeatherLocal } from "./src/services/WeatherService";
import { DateTime } from "luxon";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Events from "./src/views/Events";

const Stack = createNativeStackNavigator();

const App = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState({});

  useEffect(() => {
    EventWeatherCall();
  }, []);

  const EventWeatherCall = async () => {
    setLoading(true);
    let tempWeather = await getWeatherLocal();
    let tempEvents = await getPublicEvents();
    const now = DateTime.now();
    const then = DateTime.now().plus({ days: 9 });
    setWeatherData(tempWeather);
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Events" component={Events} />
        </Stack.Navigator>
        <View>

        </View>
        <StatusBar style="auto" />
      </NavigationContainer>
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
