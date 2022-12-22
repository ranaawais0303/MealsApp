import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

function MealsItem({ title, duration, imageUrl, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealsItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    //for ios pick from gridtile shadows..
  },
  //only for ios
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  ///////////////
  image: {
    // backgroundColor: "red",

    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
