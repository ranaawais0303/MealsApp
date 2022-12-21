import React from "react";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen-{catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
