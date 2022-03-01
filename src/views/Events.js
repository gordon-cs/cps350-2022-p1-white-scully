import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
} from "react-native";
import colors from "../../Colors";
import { useState } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { ParseConditionForIcon, Umbrella } from "../../Icons";

const Events = (props) => {
  let content = props.events.map((e) => (
    <EventListItem events={e} key={"Event" + e[3]} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={{ color: colors.white, fontSize: 15 }}>
          Gordon Events Weather
        </Text>
        <Text style={{ color: colors.white, fontSize: 30, fontWeight: "bold" }}>
          Gordon College
        </Text>
        <Text style={{ color: colors.white, fontSize: 20, paddingBottom: 10 }}>
          Event Calendar
        </Text>
        <View style={styles.dateView}>
          <Text
            style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}
          >
            {NumToMonth[props.dateRange[0].month]} {props.dateRange[0].day}
            {props.dateRange[0].year != props.dateRange[9].year
              ? " " + props.dateRange[0].year
              : ""}{" "}
            -{" "}
            {props.dateRange[0].month != props.dateRange[9].month
              ? NumToMonth[props.dateRange[9].month]
              : ""}{" "}
            {props.dateRange[9].day}, {props.dateRange[9].year}
          </Text>
        </View>
        <View style={styles.listView}>{content}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const EventListItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  let hour;
  let minute;
  let AMPM;
  const time = props.events[2];

  if (time.hour == 12) {
    hour = 12;
    AMPM = "pm";
  } else if (time.hour == 0) {
    hour = 12;
    AMPM = "am";
  } else if (time.hour > 12) {
    hour = time.hour % 12;
    AMPM = "pm";
  } else {
    hour = time.hour;
    AMPM = "am";
  }

  if (time.minute < 10) {
    minute = "0" + time.minute;
  } else {
    minute = time.minute;
  }

  if (props.events)
    return (
      <Collapse
        isExpanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <CollapseHeader>
          <View style={styles.listHeader}>
            <Text style={styles.listDay}>
              {props.events[2].day < 10 ? " " : ""}
              {props.events[2].day}
            </Text>
            <Text style={styles.listDayOfWeek}>
              {props.events[2].weekdayShort}
            </Text>
            <Text style={styles.listEventName}>
              {props.events[0].Event_Name}
            </Text>
            <View style={styles.chevron}>
              <Image
                source={
                  expanded
                    ? require("../../assets/icons/png/upward-chevron.png")
                    : require("../../assets/icons/png/downward-chevron.png")
                }
              />
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.listBody}>
            <Text
              style={{
                color: colors.white,
                fontSize: 20,
                fontWeight: "bold",
                position: "absolute",
                top: 12,
                left: 20,
              }}
            >
              {hour}:{minute} {AMPM}
            </Text>
            <View style={{ position: "absolute", left: 120, top: 10 }}>
              {ParseConditionForIcon(props.events[1].condition.text)}
            </View>

            <Text style={styles.listTemperature}>
              {props.events[1].temp_f} °F
            </Text>
            <View style={styles.umbrella}>
              <Umbrella color={colors.blue} size={40} />
            </View>
            <View style={styles.umbrella}>
              <Umbrella color={colors.blue} size={40} />
            </View>
            <Text style={styles.rainChance}>
              {props.events[1].chance_of_rain > props.events[1].chance_of_snow
                ? props.events[1].chance_of_rain
                : props.events[1].chance_of_snow}
              %
            </Text>
          </View>
        </CollapseBody>
      </Collapse>
    );
};

// Annoying object for translating month to text
const NumToMonth = [
  "placeholder",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
  dateView: {
    backgroundColor: colors.light.accent,
    borderColor: colors.white,
    borderWidth: 2,
    width: "90%",
    height: 35,
    alignItems: "center",
    marginBottom: 10,
  },
  listView: {
    backgroundColor: colors.light.navbar,
    width: "90%",
  },
  listHeader: {
    borderColor: colors.white,
    borderWidth: 1,
    height: 50,
  },
  listBody: {
    backgroundColor: colors.light.accent,
    height: 50,
  },
  listDay: {
    paddingTop: 14,
    color: colors.light.accent,
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    left: 10,
  },
  listDayOfWeek: {
    paddingTop: 14,
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    left: 35,
  },
  listTemperature: {
    top: 12,
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 160,
  },
  listEventName: {
    paddingTop: 15,
    color: colors.light.accent,
    fontSize: 12,
    fontWeight: "bold",
    position: "absolute",
    left: 70,
  },
  chevron: {
    position: "absolute",
    right: 10,
  },
  umbrella: {
    position: "absolute",
    right: 55,
    top: 5,
  },
  rainChance: {
    top: 12,
    color: colors.blue,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    right: 2,
  },
});

export default Events;
