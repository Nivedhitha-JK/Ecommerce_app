import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import LoaderKit from "react-native-loader-kit";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomStepIndicator from "../components/CustomStepIndicator";
const OrderScreen = ({ route }) => {
  const { productDetails, selectedColor, selectedQuantity, selectedSize } =
    route.params;

  console.log(productDetails);
  const baseUrl = "http://192.168.20.5:3000/";

  console.log(baseUrl);
  const imageUrl = `${baseUrl}${productDetails.images[0]}`;
  console.log(imageUrl);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const labels = ["Review", "Payment"];

  const navigation = useNavigation();

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
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
        <View style={styles.address1}>
          <Text style={styles.addressTxt}>Deliver to:</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnTxt}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.address2}>
          <Text style={styles.addressTxt}>Saravana</Text>
          <Text>123,ABC Street</Text>
          <Text>9087685467</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <View style={styles.proImgContainer}>
          <Image
            source={{
              uri: `${baseUrl}${productDetails.images}` || "no image found",
              cache: "force-cache",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.proDetailsContainer}>
          <Text style={styles.proTxt}>{productDetails.name}</Text>
          <Text style={styles.proTxt}>₹ {productDetails.final_price}</Text>
          <Text style={styles.proTxt1}>Qty: {selectedQuantity}</Text>
          <Text style={styles.proTxt1}>Color: {selectedColor}</Text>
          <Text style={styles.proTxt1}>Size: {selectedSize}</Text>
        </View>
      </View>
      {/* <View style={styles.msgContainer}>
        <Text>Price Details</Text>
        <Text>₹ {productDetails.final_price}</Text>
      </View> */}

      <View style={styles.priceDetailsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <View style={styles.priceDetailsHeader}>
            <Text style={styles.priceDetailsTitle}>Price Details</Text>
            <MaterialIcons
              size={23}
              color="#0A3981"
              name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            />
          </View>
        </TouchableWithoutFeedback>
        {isExpanded && (
          <View style={styles.priceBreakdown}>
            <View style={styles.priceItem}>
              <Text style={styles.priceLabel}>Total Price</Text>
              <Text style={styles.priceValue}>
                ₹{productDetails.final_price}
              </Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.priceLabel}>Shipping Fee</Text>
              <Text style={styles.priceValue}>₹0</Text>
            </View>
            <View style={styles.priceItemTotal}>
              <Text style={styles.priceLabelTotal}>Total</Text>
              <Text style={styles.priceValueTotal}>
                ₹{productDetails.final_price}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={handlePayment}>
          <Text style={styles.btn}>Continue</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={loading} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* <ActivityIndicator size="large" color="red" /> */}
            <LoaderKit
              style={{ width: 50, height: 50 }}
              name={"Pacman"}
              color={"#0A3981"}
            />
            <Text style={styles.loadingTxt}>Please Wait...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    flexDirection: "column",
    gap: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  addressContainer: {
    backgroundColor: "white",
    padding: 15,
    // paddingVertical: 15,
    // marginVertical: 5,
    flexDirection: "column",
    gap: 15,
  },
  addressTxt: {
    fontWeight: "bold",
    fontSize: 18,
  },
  address1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 12,
  },
  address2: { flexDirection: "column", gap: 7 },
  editBtn: {
    backgroundColor: "#0A3981",
    padding: 5,
    borderRadius: 5,
  },
  editBtnTxt: {
    color: "white",
  },
  productContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  proImgContainer: {
    // backgroundColor: "green",
  },
  proDetailsContainer: {
    flexDirection: "column",
    alignContent: "flex-start",
    gap: 3,
    flex: 1,
    // backgroundColor: "green",
    paddingHorizontal: 5,
  },
  proTxt: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#4c4f52",
  },
  proTxt1: {
    color: "#4c4f52",
    fontWeight: "450",
  },

  msgContainer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
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
  stepContainer: {
    backgroundColor: "white",
    // marginVertical: 5,
    paddingVertical: 7,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  loadingTxt: {
    fontSize: 15,
    marginTop: 10,
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
});
