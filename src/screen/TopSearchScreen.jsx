import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TopSearchScreen = ({ isLoggedIn, phoneNumber }) => {
  console.log(isLoggedIn);
  console.log(phoneNumber);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <FontAwesome name="user-circle-o" size={40} color={"#0A3981"} />
        </TouchableOpacity>
        <Text style={styles.txt}>{isLoggedIn ? "Login" : "Guest"}</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconWrapper}>
          <Fontisto name={"search"} size={25} style={styles.icon} />
        </View>
        <TextInput
          placeholder="search here"
          style={styles.txtInput}
          placeholderTextColor="black"
        />
        <View style={styles.iconWrapper}>
          <Octicons name={"filter"} size={25} style={styles.icon1} />
        </View>
      </View>
    </View>
  );
};

export default TopSearchScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    // backgroundColor: "blue",
  },
  // userContainer: {
  //   marginVertical: 20,
  //   flexDirection: "row",
  //   gap: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  inputContainer: {
    flex: 2.5,
    borderRadius: 50,
    color: "#0A3981",
    // height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "#0A3981",
  },
  iconWrapper: {
    width: 50,
    alignItems: "center",
  },
  icon: {
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 50,
  },
  txtInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
    fontFamily: "Nunito-ExtraBold",
    // backgroundColor: "blue",
  },
  icon1: {
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 50,
  },
  container: {
    // flex: 1,
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
  },
  txt: {
    fontFamily: "Nunito-ExtraBold",
    color: "#0A3981",
  },
});
