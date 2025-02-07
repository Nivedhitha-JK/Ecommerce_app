import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import RadioButtonRN from "radio-buttons-react-native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomStepIndicator from "../components/CustomStepIndicator";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const PaymentScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const labels = ["Review", "Payment"];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#0A3981",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#0A3981",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#0A3981",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#0A3981",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#0A3981",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#0A3981",
  };
  const data = [
    {
      label: "Cash on Delivery",
    },
    {
      label: "Credit/Debit card/UPI",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        {/* <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={2}
        /> */}
        <CustomStepIndicator
          currentPosition={currentPosition}
          labels={labels}
        />
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.paymentTxt}>Select Payment Method</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          icon={<Octicons name="check-circle-fill" size={22} color="#0A3981" />}
          activeColor="#0A3981"
          deactiveColor="#e2e2e2"
          boxStyle={styles.radioBox}
        />
      </View>
      <View style={styles.priceDetailsContainer}>
        <TouchableWithoutFeedback
          style={styles.priceDetailsHeader}
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <Text style={styles.priceDetailsTitle}>Price Details</Text>
          <MaterialIcons
            size={23}
            color="#0A3981"
            name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          />
        </TouchableWithoutFeedback>
        {isExpanded && (
          <View style={styles.priceBreakdown}>
            <View style={styles.priceItem}>
              <Text style={styles.priceLabel}>Subtotal</Text>
              <Text style={styles.priceValue}>₹5,000</Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.priceLabel}>Shipping Fee</Text>
              <Text style={styles.priceValue}>₹198</Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.priceLabel}>Tax</Text>
              <Text style={styles.priceValue}>₹200</Text>
            </View>
            <View style={styles.priceItemTotal}>
              <Text style={styles.priceLabelTotal}>Total</Text>
              <Text style={styles.priceValueTotal}>₹5,398</Text>
            </View>
          </View>
        )}
      </View>
      <TouchableWithoutFeedback>
        <Text style={styles.btn}>Place Order</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  stepContainer: {
    marginVertical: 5,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  btnContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  paymentTxt: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Nunito-Bold",
  },
  radioBox: {
    flexDirection: "row-reverse",
    borderWidth: 3,
  },

  priceDetailsContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginVertical: 7,
  },
  priceDetailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  priceDetailsTitle: {
    fontSize: 18,
    fontFamily: "Nunito-Bold",
    color: "#000",
  },
  priceBreakdown: {
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2",
    paddingVertical: 10,
  },
  priceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  priceLabel: {
    fontSize: 16,
    color: "#555",
  },
  priceValue: {
    fontSize: 16,
    color: "#000",
  },
  priceItemTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2",
    marginTop: 10,
  },
  priceLabelTotal: {
    fontSize: 17,
    fontFamily: "Nunito-Bold",
    color: "#000",
  },
  priceValueTotal: {
    fontSize: 17,
    fontFamily: "Nunito-Bold",
    color: "#000",
  },
  btn: {
    backgroundColor: "#0A3981",
    padding: 5,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
    borderRadius: 3,
    fontFamily: "MierA-DemiBold",
    marginVertical: 20,
  },
});
