import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const goToDelete = () => {
    navigation.navigate("DeleteConfirmation");
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={goToDelete}>
        <Text style={styles.txt}>Delete My Account</Text>
        <Text style={styles.paraTxt}>
          You will not be able to access your personal data including your old
          orders, saved addresses, payment methods etc
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  txt: {
    color: "red",
    fontSize: 18,
    fontFamily: "Mier",
    fontWeight: "600",
    padding: 5,
  },
  container: {
    margin: 10,
    gap: 5,
  },
  paraTxt: {
    fontFamily: "Mier",
  },
});
