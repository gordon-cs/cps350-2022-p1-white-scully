import { StyleSheet, View, Text } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>It is currently {props.localWeatherData.current.temp_f}°F where you are!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAC2D6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

