import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
const DeleteConfirmation = () => {
  const navigation = useNavigation();

  const backToEdit = () => {
    navigation.navigate("EditProfileScreen");
  };

  const guidelines = [
    "Your account will be permanently deleted after 14 days, during which you can reactivate it by signing in with the same phone number",
    "You will not be able to return/cancel your orders that are not delivered yet",
    "You will not be able to check your old orders",
    "You will not be able to check your saved addresses, payment methods, and wishlist",
    "You will lose out on the latest offers, discounts, and sale updates",
  ];

  const gotToEditPage = () => {};

  return (
    <View style={styles.container}>
      {/* <View style={styles.tab}>
        <TouchableWithoutFeedback onPress={backToEdit}>
          <Entypo name={"chevron-left"} size={25} style={styles.arrow} />
        </TouchableWithoutFeedback>
        <Text style={styles.txt}>DeleteConfirmation</Text>
      </View> */}
      <View style={styles.container1}>
        <Text style={styles.txtHead}>Once you delete your account</Text>
        {guidelines.map((g, index) => (
          <Text key={index} style={styles.guideTxt}>
            {`\u2022 ${g}`}
          </Text>
        ))}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn1} onPress={backToEdit}>
          <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnTxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 3,
    letterSpacing: 1,
    fontFamily: "Helvetica",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  txtHead: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  container1: {
    margin: 10,
  },
  guideTxt: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 5,
    letterSpacing: 1,
    fontFamily: "Mier",
    lineSpacing: 3,
    fontWeight: "600",
    paddingVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    marginVertical: 30,
  },
  btn1: {
    backgroundColor: "#0A3981",
    width: 150,
    borderRadius: 2,
    textAlign: "center",
    padding: 5,
  },
  btn2: {
    backgroundColor: "#0A3981",
    width: 180,
    borderRadius: 2,
    textAlign: "center",
    padding: 5,
  },
  btnTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
