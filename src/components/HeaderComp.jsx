import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../constants/color";
import { iconSize } from "../constants/dimensions";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screen/CartScreen";
const HeaderComp = () => {
  const navigation = useNavigation();
  const goToCart = () => {
    navigation.navigate("CartScreen");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name={"chevron-back"}
          size={iconSize.md}
          color={color.iconPrimary}
          onPress={goToHome}
        />
      </TouchableOpacity>
      <Text style={styles.txt}>ACCOUNT</Text>
      <View style={styles.container1}>
        <TouchableOpacity onPress={goToCart}>
          <MaterialCommunityIcons name={"cart"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: "5",
    alignItems: "center",
    // margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 15,
  },
  txt: {
    fontSize: 15,
    fontFamily: "Helvetica",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  container1: {
    position: "absolute",
    right: 20,
    cursor: "pointer",
  },
});
