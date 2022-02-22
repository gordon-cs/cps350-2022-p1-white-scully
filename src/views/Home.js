import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../../Colors";
import { ParseConditionForIcon } from "../../Icons";

const Home = (props) => {
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
              width: "69%" /*not a meme, actuality*/,
            }}
          >
            <Text
              style={{ color: colors.white, fontSize: 25, fontWeight: "bold" }}
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
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
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
