import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const AddAddressScreen = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const handleValidation = () => {
    let valid = true;

    if (name.trim() === "") {
      setNameError("This field is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (phoneNumber.trim() === "") {
      setPhoneError("This field is required");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (valid) {
      console.log("Submitted name", name);
      console.log("Submitted phone", phoneNumber);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name *"
            style={styles.input}
            value={name}
            onChangeText={setName}
            // editable={true}
          />
          {nameError ? <Text style={{ color: "red" }}>{nameError}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contact Number *"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            editable={true}
          />
          {phoneError ? (
            <Text style={{ color: "red" }}>{phoneError}</Text>
          ) : null}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleValidation}>
              <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  container1: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 30,
    marginVertical: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontWeight: 500,
    // backgroundColor: "blue",
  },
  inputContainer: {
    flex: 1,
  },
  btn: {
    backgroundColor: "#0A3981",
    color: "white",
    textAlign: "center",
    borderRadius: 3,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    elevation: 10, // Shadow effect on Android
    shadowColor: "#000", // Shadow effect on iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
