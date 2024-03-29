import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Keyboard,
  TextInput,
  Text,
} from "react-native";
import { getWeatherSearch } from "../services/WeatherService";
import { useState } from "react";
import * as Device from "expo-device";
import { DateTime } from "luxon";
import colors from "../../Colors";
import { MagnifyingGlass } from "../../Icons";
import CurrentWeather from "./CurrentWeather";

const Search = (props) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState("");
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState(false);

  const handleSubmitLocation = async () => {
    Keyboard.dismiss();
    setLoading(true);
    if (searchLocation) {
      let tmpWeather = await getWeatherSearch(searchLocation);
      let locationToday;
      if (typeof tmpWeather.error === "undefined") {
        if (Device.manufacturer == "Apple") {
          locationToday = DateTime.now().setZone(tmpWeather.location.tz_id);
        } else {
          locationToday = DateTime.now();
        }
        setWeather(tmpWeather);
        setToday(locationToday);
        setSearch(true);
        setSearchLocation("");
      } else {
        setWeather({});
        setToday("");
        setSearch(false);
      }
    } else {
      setSearch(false);
    }
    setLoading(false);
  };

  let content = search ? (
    <CurrentWeather weather={weather} today={today} />
  ) : (
    <Text style={{ alignSelf: "center" }}>No location found</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 12,
          borderRadius: 15,
          backgroundColor: colors.light.accent,
          padding: 10,
          fontSize: 20,
          width: "75%",
          flexDirection: "row",
        }}
      >
        <MagnifyingGlass color={colors.light.navbar} size={20} />
        <TextInput
          style={{
            fontWeight: "bold",
            marginLeft: "3%",
            width: "75%",
          }}
          value={searchLocation}
          placeholder={"Search a Location"}
          placeholderTextColor={colors.light.navbar}
          onChangeText={setSearchLocation}
          onSubmitEditing={handleSubmitLocation}
        />
      </View>
      <View style={{ width: "100%", height: "90%" }}>
        {loading ? null : content}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.light.background,
    alignItems: "center",
  },
});

export default Search;
