import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useRoute } from "@react-navigation/native";
const OrderScreen = ({ route }) => {
  const { productDetails, selectedColor, selectedQuantity, selectedSize } =
    route.params;

  console.log(productDetails);
  const baseUrl = "http://192.168.20.5:3000/";

  console.log(baseUrl);
  const imageUrl = `${baseUrl}${productDetails.images[0]}`;
  console.log(imageUrl);
  return (
    <View style={styles.container}>
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
      <View style={styles.msgContainer}>
        <Text>Price Details</Text>
        <Text>₹ {productDetails.final_price}</Text>
      </View>
      <View>
        <TouchableHighlight>
          <Text style={styles.btn}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    flexDirection: "column",
    gap: 10,
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
  },
});
