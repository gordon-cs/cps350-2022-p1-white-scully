import { StyleSheet, View, Text } from "react-native";

const Events = () => {
  return (
    <View style={styles.container}>
      <Text>Events Page</Text>
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

export default Events;

