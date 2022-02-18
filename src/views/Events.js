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
  let content = props.events.map((e) => <EventListItem events={e} key={"Event" + e[2]}/>);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>{content}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const EventListItem = (props) => {
  return (
    <View>
      <Text>Name of Event: {props.events[0].Event_Name}</Text>
      <Text>Date of Event: {props.events[1].time}</Text>
      <Text>
        Temperature: {props.events[1].temp_f}°F Weather Condition:{" "}
        {props.events[1].condition.text}{" "}
      </Text>
    </View>
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
