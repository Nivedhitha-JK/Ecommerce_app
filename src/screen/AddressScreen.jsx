import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomStepIndicator from "../components/CustomStepIndicator";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RadioButtonRN from "radio-buttons-react-native";
import { useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(1);

  const labels = ["Cart", "Address", "Payment", "summary"];
  const data = [
    {
      label:
        "Saravana dsjfanskdfjanskdfns,mdfsdknfsd djkflsdlkfja ndfkasdkfka south masud dsfjksdkf dkjfkasj",
    },
    {
      label: "Pay Online",
    },
  ];

  const navigation = useNavigation();
  const goToAddAddressPage = () => {
    navigation.navigate("AddAddressScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <CustomStepIndicator
          currentPosition={currentPosition}
          labels={labels}
        />
      </View>
      <View style={styles.addressContainer}>
        <TouchableWithoutFeedback onPress={goToAddAddressPage}>
          <Text style={styles.addressTxt}>+ ADD NEW ADDRESS</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.radioBtnContainer}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          activeColor="#0A3981"
          // deactiveColor="#e2e2e2"
          boxStyle={styles.radioBox}
          animationTypes={["pulse"]}
          renderCustomButton={(radioProps) => (
            <View style={styles.radioButtonWrapper}>
              <TouchableOpacity
                style={styles.radioButtonInner}
                onPress={() => console.log("Button inside radio pressed")}
              >
                <Text style={styles.buttonText}>Click</Text>
              </TouchableOpacity>
            </View>
          )}
          // />
        />
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgray",
    flexDirection: "column",
    gap: 10,
  },
  stepContainer: {
    backgroundColor: "white",
    marginVertical: 7,
  },
  addressTxt: {
    color: "#0A3981",
    marginHorizontal: 10,
    // backgroundColor: "red",
    paddingHorizontal: 25,
    fontSize: 17,
    fontFamily: "Nunito-Bold",
  },
  radioBtnContainer: {
    marginHorizontal: 20,
    // border: none,
  },
  radioBox: {
    flexDirection: "row-reverse",
    // borderWidth: 2,
  },
  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioButtonInner: {
    backgroundColor: "#0A3981",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
