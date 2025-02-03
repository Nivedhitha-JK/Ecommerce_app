import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TopSearchScreen = ({ toggleModal }) => {
  return (
    <View style={styles.topContainer}>
      <View>
        <TouchableOpacity style={styles.userContainer} onPress={toggleModal}>
          <FontAwesome name="user-circle-o" size={40} color={"#0A3981"} />
          {/* <Text>Name here</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Fontisto name={"search"} size={25} style={styles.icon} />
        </View>
        <TextInput
          placeholder="search"
          style={styles.txtInput}
          placeholderTextColor="black"
        />
        <Octicons name={"filter"} size={25} style={styles.icon1} />
      </View>
    </View>
  );
};

export default TopSearchScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    // backgroundColor: "blue",
  },
  userContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    borderRadius: 50,
    color: "#0A3981",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    borderWidth: 3,
    borderColor: "#0A3981",
    gap: 2,
  },
  icon: {
    // margin: 10,
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 30,
  },
  txtInput: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
    width: "70%",
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
  },
  icon1: {
    // margin: 10,
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 30,
  },
});
