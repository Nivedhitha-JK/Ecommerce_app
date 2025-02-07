import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FlatList } from "react-native-gesture-handler";
import CartCardScreen from "./CartCardScreen";
import { useNavigation } from "@react-navigation/native";
import CustomStepIndicator from "../components/CustomStepIndicator";
import LoaderKit from "react-native-loader-kit";
const CartScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const labels = ["Cart", "Address", "Payment", "summary"];

  // const customStyles = {
  //   stepIndicatorSize: 25,
  //   currentStepIndicatorSize: 30,
  //   separatorStrokeWidth: 2,
  //   currentStepStrokeWidth: 3,
  //   stepStrokeCurrentColor: "#0A3981",
  //   stepStrokeWidth: 3,
  //   stepStrokeFinishedColor: "#0A3981",
  //   stepStrokeUnFinishedColor: "#aaaaaa",
  //   separatorFinishedColor: "#0A3981",
  //   separatorUnFinishedColor: "#aaaaaa",
  //   stepIndicatorFinishedColor: "#0A3981",
  //   stepIndicatorUnFinishedColor: "#ffffff",
  //   stepIndicatorCurrentColor: "#ffffff",
  //   stepIndicatorLabelFontSize: 13,
  //   currentStepIndicatorLabelFontSize: 13,
  //   stepIndicatorLabelCurrentColor: "#0A3981",
  //   stepIndicatorLabelFinishedColor: "#ffffff",
  //   stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  //   labelColor: "#999999",
  //   labelSize: 13,
  //   currentStepLabelColor: "#0A3981",
  // };

  const { cartItems, removeFromCart, clearCart, updateCartItem } = useCart();
  console.log(cartItems);

  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity onPress={() => navigation.popToTop()}>
  //         <Ionicons name="chevron-back" size={25} style={styles.arrow} />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  const TotalPrice = cartItems.reduce(
    (total, item) => total + item.finalprice * (item.quantity || 1),
    0
  );

  const goToAddress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("AddressScreen");
    }, 2000);
  };
  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require("../assets/images/emptyCartImage.png")}
            style={styles.emptyCart}
          />
          <Text style={styles.emptyTxt}>
            Your cart is Empty...
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Text style={styles.emptyTxt1}>Grab something</Text>
            </TouchableOpacity>
            🚀
          </Text>
        </View>
      ) : (
        <>
          <CustomStepIndicator
            currentPosition={currentPosition}
            labels={labels}
          />

          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id} - ${index}`}
            renderItem={({ item }) => (
              <CartCardScreen item={item} onUpdateCartItem={updateCartItem} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View style={styles.orderDetailContainer}>
                <Text style={styles.txt}>Order Details</Text>
                <View style={styles.horizontalLine} />
                <View style={styles.priceContainer}>
                  <Text style={styles.txt1}>Total MRP</Text>
                  <Text style={styles.txt1}>${TotalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.txt1}>Shipping fee</Text>
                  <Text style={styles.freeTxt}>Free</Text>
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.priceContainer}>
                  <Text style={styles.totalTxt}>Total Amount</Text>
                  <Text style={styles.totalTxt}>${TotalPrice.toFixed(2)}</Text>
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
                    <Text style={styles.btn} onPress={goToAddress}>
                      Continue
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            }
          />
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "#0A3981",
  },
  emptyTxt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    // backgroundColor: "red",
  },
  emptyTxt1: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "green",
    marginBottom: -4,
    color: "#0A3981",
  },
  emptyCart: {
    width: 200,
    height: 200,
    color: "#0A3981",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  txt1: {
    fontSize: 15,
    // fontWeight: "bold",
  },
  freeTxt: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  totalTxt: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#0A3981",
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
