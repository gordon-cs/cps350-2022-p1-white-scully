import { StyleSheet, View, Text } from "react-native";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import colors from "../../Colors";

const Events = (props) => {
  return (
    <View style={styles.container}>
      <Text>Events Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Events;
