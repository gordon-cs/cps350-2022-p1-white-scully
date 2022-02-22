import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { DateTime } from "luxon";
import colors from "../../Colors";
import { ParseConditionForIcon } from "../../Icons";

const Home = (props) => {
  let hourlyWeather = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 24; j++) {
      if (
        props.weather.forecast.forecastday[i].hour[j].time_epoch >
          props.today.toSeconds() &&
        props.weather.forecast.forecastday[i].hour[j].time_epoch <
          props.today.plus({ hours: 12 }).toSeconds()
      ) {
        hourlyWeather.push([
          props.weather.forecast.forecastday[i].hour[j],
          DateTime.fromSeconds(
            props.weather.forecast.forecastday[i].hour[j].time_epoch
          ),
          "day: " + i + " " + "hour: " + j,
        ]);
      }
    }
  }

  let content = hourlyWeather.map((d) => (
    <WeatherList weather={d[0]} time={d[1]} key={d[2]} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={{ color: colors.white, fontSize: 15 }}>
          Gordon Events Weather
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: 30,
            fontWeight: "bold",
            paddingBottom: 6,
          }}
        >
          Current Weather
        </Text>
        <View
          style={{
            borderColor: colors.white,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1,
            height: 25,
            width: 250,
          }}
        >
          <Text
            style={{ fontSize: 14, color: colors.white, fontWeight: "bold" }}
          >
            {props.weather.location.name}{" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.light.navbar,
              fontWeight: "bold",
            }}
          >
            {props.weather.location.region}
          </Text>
        </View>
        <View style={{ width: 200, height: 200 }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: "400",
              fontSize: 125,
              alignSelf: "flex-start",
            }}
          >
            {Math.round(props.weather.current.temp_f)}
          </Text>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: colors.white,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              position: "absolute",
              right: "0%",
              top: "10%",
            }}
          >
            <Text style={{ fontSize: 10, color: colors.light.background }}>
              High
            </Text>
            <Text style={{ fontSize: 25, color: colors.light.background }}>
              {Math.round(props.weather.forecast.forecastday[0].day.maxtemp_f)}
            </Text>
          </View>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: colors.light.navbar,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              position: "absolute",
              right: "0%",
              top: "40%",
            }}
          >
            <Text style={{ fontSize: 10, color: colors.light.accent }}>
              Low
            </Text>
            <Text style={{ fontSize: 25, color: colors.light.accent }}>
              {Math.round(props.weather.forecast.forecastday[0].day.mintemp_f)}
            </Text>
          </View>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: colors.light.accent,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              position: "absolute",
              right: "0%",
              top: "70%",
            }}
          >
            {ParseConditionForIcon(props.weather.current.condition.text)}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "11%",
              justifyContent: "center",
              alignItems: "center",
              width: "75%",
            }}
          >
            <Text
              style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}
            >
              {props.weather.current.condition.text}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 2,
            width: 250,
            backgroundColor: colors.white,
            marginBottom: 10,
          }}
        ></View>
        <Text
          style={{
            fontWeight: "bold",
            color: colors.white,
            fontSize: 25,
            marginBottom: 10,
          }}
        >
          {props.today.weekdayLong}, {props.today.monthShort}. {props.today.day}
        </Text>
        <View
          style={{
            borderColor: colors.white,
            borderRadius: 15,
            borderWidth: 2,
            width: 250,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 10
          }}
        >
          {content}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const WeatherList = (props) => {
  return (
    <View
      style={{
        position: "relative",
        left: 10,
        height: 40,
        width: 225,
        borderColor: colors.white,
        borderBottomWidth: 2,
        justifyContent: "center",
      }}
    >
      <Text
        style={{ fontSize: 16, fontWeight: "bold", color: colors.light.navbar }}
      >
        {props.time.hour == 12
          ? 12 + " pm"
          : props.time.hour == 0
          ? 12 + " am"
          : props.time.hour > 12
          ? (props.time.hour % 12) + " pm"
          : props.time.hour + " am"}
      </Text>
      <View style={{ position: "absolute", right: 50 }}>
        {ParseConditionForIcon(props.weather.condition.text)}
      </View>
      <Text
        style={{ fontSize: 16, fontWeight: "bold", color: colors.white, position: "absolute", right: 12 }}
      >
        {Math.round(props.weather.temp_f)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: colors.light.background,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
