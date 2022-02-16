import { StyleSheet, View, Text } from "react-native";
import { DateTime } from "luxon";
import { useState } from "react";

const Events = (props) => {
  const [gordonWeatherData, setGordonWeatherData] = useState(props.gordonWeatherData);
  return (
    <View style={styles.container}>
      <Text>Events Page</Text>
      <Text>{props.events[0].Event_Name}</Text>
      {/* <GetEventWeather
        startTime={props.events[0].startDate}
        weatherForecast={gordonWeatherData.forecast.forecastday}
      /> */}
      <Text style={{ width: "80%" }}>{props.events[0].Description}</Text>
    </View>
  );
};

const GetEventWeather = (startTime, weatherForecast) => {
  console.log("bruh");
  const startDate = new Date(startTime).getTime();
  const thirtyMinutesToMillis = 30 * 60000;
  // weatherForecast.foreach((day) =>
  //   day.hour.foreach((hour) => {
  //     if (
  //       hour.time_epoch - thirtyMinutesToMillis < startDate &&
  //       hour.time_epoch + thirtyMinutesToMillis > startDate
  //     ) {
  //       return hour;
  //     }
  //   })
  // );
  for (let day = 0; day < 10; day++) {
    console.log("day: " + day);
    for (let hour = 0; hour < 24; hour++) {
      console.log("hour: " + hour);
      let weatherTime = weatherForecast[day].hour[hour].time_epoch;
      if (
        weatherTime - thirtyMinutesToMillis < startDate &&
        weatherTime + thirtyMinutesToMillis > startDate
      ) {
        return <Text>{weatherForecast[day].hour[hour].time}</Text>;
      }
    }
  }

  return <Text>No weather data matches that date</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAC2D6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Events;
