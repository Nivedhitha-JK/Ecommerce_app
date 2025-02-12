import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginModal = ({
  isModalVisible,
  toggleModal,
  loginSubmit,
  phoneNumber,
  setPhoneNumber,
}) => {
  // allow numerics only

  const handleInputChange = (txt) => {
    const numericVal = txt.replace(/[^0-9]/g, "");
    setPhoneNumber(numericVal);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>SignUp to Continue</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "blue",
  },
  modalContent: {
    width: 400,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
    marginHorizontal: 5,
    height: 300,
    // justifyContent: "flex-end",
    // height: 5000,
    // marginTop: 400,
  },
  phoneNumber: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#0A3981",
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
