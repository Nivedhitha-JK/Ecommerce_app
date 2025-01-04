import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>
          Hello, Welcome &nbsp;
          <MaterialIcons name={"waving-hand"} size={20} style={styles.txt} />
        </Text>
        <Text style={styles.txt1}>Arjun</Text>
      </View>
      <View style={styles.userIcon}>
        <FontAwesome
          name={"user-circle-o"}
          size={40}
          style={styles.userIcon1}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txt: {
    fontWeight: "bold",
    margin: "15",
    // color: "#810CA8",
    color: "#1F509A",
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 12,

    // color: "#810CA8",
    color: "#1F509A",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 20,
  },
  userIcon: {
    // margin: 20,
    // color: "#810CA8",
    color: "#1F509A",
  },
  userIcon1: {
    // color: "#810CA8",
    color: "#1F509A",
  },
});
