import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
const WishlistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.txt}>MY PRODUCTS</Text>
      </View>
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    // backgroundColor: "green",
  },
  headContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 15,
    fontFamily: "Helvetica",
    letterSpacing: 1,
    fontWeight: "bold",
  },
});
