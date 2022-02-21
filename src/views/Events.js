import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import colors from "../../Colors";

const Events = (props) => {
  let content = props.events.map((e) => (
    <EventListItem events={e} key={"Event" + e[2]} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Gordon College</Text>
        <Text style={styles.subHeader}>Event Calendar</Text>
        <View style={styles.dateView}></View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  listItem: {
    backgroundColor: colors.light.navbar,
  },
  header: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeader: {
    color: colors.white,
    fontSize: 20,
  },
  dateText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  dateView: {
    color: colors.light.accent,
    borderColor: colors.white,
    borderWidth: 5,
  }
});

export default Events;
