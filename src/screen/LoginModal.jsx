import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
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
          <Text style={styles.termsTxt}>
            By continuing, you agree to Evvi's Terms & Conditions and Privacy
            Policy
          </Text>
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
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 15,
    height: 250,
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
  termsTxt: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 12,
  },
});
