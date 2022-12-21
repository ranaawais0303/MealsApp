import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function MealsItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default MealsItem;
