import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../../Colors";
import {
  ParseConditionForIcon,
  ThermometerHalf,
  Umbrella,
  Wind,
} from "../../Icons";

const CurrentWeather = (props) => {
  let hourlyWeather = [];
  let hourCount = 1;
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
          props.today.plus({ hours: hourCount }),
          "day: " + i + " " + "hour: " + j,
        ]);
        hourCount++;
      }
    }
  }

  let hour;
  let minute;
  let AMPM;
  const time = props.today;

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
            flex: 1,
            height: 40,
            width: 250,
          }}
        >
          <View style={{ flexDirection: "row" }}>
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
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: colors.white }}>
              Local Time:
            </Text>
            <Text style={{ fontWeight: "bold", color: colors.light.navbar }}>
              {" "}{hour}:{minute} {AMPM}
            </Text>
          </View>
        </View>
        <View style={{ width: 250, height: 200 }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: "400",
              fontSize: 130,
              alignSelf: "flex-start",
            }}
          >
            {props.weather.current.tempf < 0
              ? Math.round(props.weather.current.temp_f)
              : " " + Math.round(props.weather.current.temp_f)}
          </Text>
          <Text
            style={{
              position: "absolute",
              top: "15%",
              right: "23%",
              color: colors.white,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            °F
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
            <Text style={{ position: "absolute", fontSize: 10, color: colors.light.background, right: "10%", top: "40%", fontWeight: "bold"}}>
              °
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
            <Text style={{ position: "absolute", fontSize: 10, color: colors.light.accent, right: "10%", top: "40%", fontWeight: "bold"}}>
              °
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
            {ParseConditionForIcon(
              props.weather.current.condition.text,
              props.today.hour
            )}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "15%",
              justifyContent: "center",
              alignItems: "center",
              width: "75%",
              left: "3%",
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
            marginBottom: 10,
          }}
        >
          {content}
        </View>
        <View style={{ paddingTop: 10, width: 250, height: 350 }}>
          <View
            style={{ position: "absolute", top: "3%", left: "4%", zIndex: 1 }}
          >
            <Umbrella color={colors.blue} size={50} />
          </View>
          <Text
            style={{
              color: colors.light.navbar,
              fontWeight: "bold",
              position: "absolute",
              left: "22%",
              top: "2%",
            }}
          >
            Precipitation
          </Text>
          <View
            style={{
              backgroundColor: colors.light.accent,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              width: "75%",
              height: "7%",
              position: "absolute",
              top: "8%",
            }}
          >
            <Text style={styles.PWHSText}>
              {props.weather.forecast.forecastday[0].day.daily_chance_of_rain >
              props.weather.forecast.forecastday[0].day.daily_chance_of_snow
                ? props.weather.forecast.forecastday[0].day.daily_chance_of_rain
                : props.weather.forecast.forecastday[0].day
                    .daily_chance_of_snow}
              %
            </Text>
          </View>

          <View
            style={{ position: "absolute", top: "20%", right: "4%", zIndex: 1 }}
          >
            <Wind color={colors.white} size={50} />
          </View>
          <Text
            style={{
              color: colors.light.navbar,
              fontWeight: "bold",
              position: "absolute",
              right: "34%",
              top: "20%",
            }}
          >
            Wind
          </Text>
          <View
            style={{
              backgroundColor: colors.light.accent,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              width: "75%",
              height: "7%",
              position: "absolute",
              top: "25%",
              right: "2%",
            }}
          >
            <Text style={styles.PWHSText}>
              {props.weather.current.wind_mph} mph
            </Text>
          </View>

          <View
            style={{ position: "absolute", top: "38%", left: "4%", zIndex: 1 }}
          >
            <ThermometerHalf color={colors.black} size={50} />
          </View>
          <Text
            style={{
              color: colors.light.navbar,
              fontWeight: "bold",
              position: "absolute",
              left: "24%",
              top: "37%",
            }}
          >
            Humidity
          </Text>
          <View
            style={{
              backgroundColor: colors.light.accent,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              width: "75%",
              height: "7%",
              position: "absolute",
              top: "43%",
            }}
          >
            <Text style={styles.PWHSText}>
              {props.weather.current.humidity} %
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.light.accent,
              height: "28%",
              width: "100%",
              position: "absolute",
              bottom: "15%",
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../../assets/icons/png/sunset.png")}
              style={{ position: "absolute", top: "-85%" }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: "5%",
                right: "4%",
                color: colors.light.navbar,
                fontWeight: "bold",
              }}
            >
              Sun Set
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "8%",
                right: "10%",
                color: colors.light.navbar,
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              {props.weather.forecast.forecastday[0].astro.sunset[0] != 0
                ? props.weather.forecast.forecastday[0].astro.sunset.substring(
                    0,
                    5
                  )
                : props.weather.forecast.forecastday[0].astro.sunset.substring(
                    1,
                    5
                  )}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "23%",
                right: "0%",
                color: colors.light.navbar,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              pm
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "5%",
                left: "5%",
                color: colors.light.navbar,
                fontWeight: "bold",
              }}
            >
              Sun Rise
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: "8%",
                left: "3%",
                color: colors.light.navbar,
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              {props.weather.forecast.forecastday[0].astro.sunrise[0] != 0
                ? props.weather.forecast.forecastday[0].astro.sunrise.substring(
                    0,
                    5
                  )
                : props.weather.forecast.forecastday[0].astro.sunrise.substring(
                    1,
                    5
                  )}
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: "12%",
                left: "30%",
                color: colors.light.navbar,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              am
            </Text>
          </View>
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
      <View style={{ position: "absolute", right: 55 }}>
        {ParseConditionForIcon(props.weather.condition.text, props.time.hour)}
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: colors.white,
          position: "absolute",
          right: 2,
        }}
      >
        {Math.round(props.weather.temp_f)} °F
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
  PWHSText: {
    color: colors.light.navbar,
    fontWeight: "bold",
  },
});

export default CurrentWeather;
