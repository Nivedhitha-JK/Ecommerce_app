import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import UserScreen from "./UserScreen";

const CartScreen = () => {
  const navigation = useNavigation();
  // const goToUser = () => {
  //   navigation.navigate("UserScreen");
  // };
  return (
    <View style={styles.container}>
      {/* <HeaderComp /> */}

      <TouchableOpacity>
        <Ionicons name={"chevron-back"} size={25} onPress={goToUser} />
      </TouchableOpacity>
      <Text style={styles.txt}>CART</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    // alignItems: "center",
    justifyContent: "space-betweesn",
    alignContent: "center",
    gap: 5,
  },
  txt: {
    letterSpacing: 1,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginTop: 5,
  },
});
