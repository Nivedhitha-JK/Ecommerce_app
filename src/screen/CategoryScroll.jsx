import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryScroll = () => {
  return (
    <View>
      <Text style={styles.women}>Women</Text>
    </View>
  );
};

export default CategoryScroll;

const styles = StyleSheet.create({
  women: {
    backgroundColor: "#0A3981",
    color: "white",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    // marginTop: 5,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
