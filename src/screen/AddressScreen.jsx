import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import CustomStepIndicator from "../components/CustomStepIndicator";
import LoaderKit from "react-native-loader-kit";
import RadioButtonRN from "radio-buttons-react-native";
import { useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const labels = ["Cart", "Address", "Payment", "summary"];
  const data = [
    {
      label: "Saravana ",
      content: "abc street, alphabet road, letters nagar",
    },
    {
      label: "Saravana",
      content: "xyz street, numeric road, numbers colony",
    },
  ];

  const navigation = useNavigation();
  const goToAddAddressPage = () => {
    navigation.navigate("AddAddressScreen");
  };

  const goToPayment = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("PaymentScreen");
    }, 2000);
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
          renderLabel={(item) => (
            <View>
              <Text>{item.label}</Text>
              <Text>{item.content}</Text>
              <Text>Hello fjksdjfoasd dsjkfaskljd jdkflsdkj</Text>
            </View>
          )}
          // renderCustomButton={(radioProps) => (
          //   <View style={styles.radioButtonWrapper}>
          //     <TouchableOpacity
          //       style={styles.radioButtonInner}
          //       onPress={() => console.log("Button inside radio pressed")}
          //     >
          //       <Text style={styles.buttonText}>Click</Text>
          //     </TouchableOpacity>
          //   </View>
          // )}
          // />
        />
      </View>
      <TouchableOpacity>
        {isLoading ? (
          <View style={styles.loader}>
            <LoaderKit
              style={{ width: 50, height: 50 }}
              name={"BallPulse"} // Optional: see list of animations below
              color={"#0A3981"}
            />
          </View>
        ) : (
          <Text style={styles.btn} onPress={goToPayment}>
            Continue
          </Text>
        )}
      </TouchableOpacity>
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
  btn: {
    backgroundColor: "#0A3981",
    padding: 5,
    color: "white",
    textAlign: "center",
    marginHorizontal: 30,
    borderRadius: 3,
    fontFamily: "MierA-DemiBold",
    marginVertical: 20,
  },
  loader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
