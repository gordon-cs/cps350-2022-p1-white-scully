import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import colors from "../../Colors";

const Events = (props) => {
  const EventWeatherItem = (props) => {
    let jsx = (
      <View>
        <View>
          <Text>Name of Event: {props.events[0][0].Event_Name}</Text>
          <Text>Date of Event: {props.events[0][1].time}</Text>
          <Text>
            Temperature: {props.events[0][1].temp_f}°F Weather Condition:{" "}
            {props.events[0][1].condition.text}{" "}
          </Text>
        </View>
        <View>
          <Text>Name of Event: {props.events[1][0].Event_Name}</Text>
          <Text>Date of Event: {props.events[1][1].time}</Text>
          <Text>
            Temperature: {props.events[1][1].temp_f}°F Weather Condition:{" "}
            {props.events[1][1].condition.text}{" "}
          </Text>
        </View>
        <View>
          <Text>Name of Event: {props.events[2][0].Event_Name}</Text>
          <Text>Date of Event: {props.events[2][1].time}</Text>
          <Text>
            Temperature: {props.events[2][1].temp_f}°F Weather Condition:{" "}
            {props.events[2][1].condition.text}{" "}
          </Text>
        </View>
      </View>
    );

    return jsx;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <EventWeatherItem events={props.events} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.light.background,
  },
  scrollView: {
    backgroundColor: colors.light.background,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
  listItem: {
    backgroundColor: colors.light.navbar,
  },
});

export default Events;
