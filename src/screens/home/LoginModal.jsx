import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginModal = ({
  isVisible,
  toggleModal,
  phoneNumber,
  handleInputChange,
  loginSubmit,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modelContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Login</Text>
          <TextInput
            style={styles.phoneNumber}
            placeholder="Enter Your phone number"
            keyboardType="phone-pad"
            placeholderTextColor={"#0A3981"}
            onChangeText={handleInputChange}
            maxLength={10}
            value={phoneNumber}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={loginSubmit}>
              <Text style={styles.txt}>Send OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={toggleModal}>
              <Text style={styles.txt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    // alignContent: "center",
  },
  modalContent: {
    width: 400,
    backgroundColor: "pink",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
    height: 200,
    marginHorizontal: 6,
    // marginTop: 540,
  },
  phoneNumber: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#0A3981",
    height: 50,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A3981",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  loginBtn: {
    backgroundColor: "#0A3981",
    padding: 7,
    borderRadius: 3,
    width: 100,
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: "#0A3981",
    color: "white",
    padding: 7,
    borderRadius: 3,
    width: 100,
  },
  txt: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
