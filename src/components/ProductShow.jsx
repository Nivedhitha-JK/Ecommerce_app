import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import API_BASE_URL from "../config/api";
import { useCart } from "../context/CartContext";
// import LoginModal from "../screen/LoginModal";
import LoginModal from "../components/LoginModal";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
const ProductShow = () => {
  const { addToCart } = useCart();

  const route = useRoute();
  const { productId } = route.params;
  console.log(productId);

  const [productDetails, setProductDetails] = useState(null);
  const [availableColors, setAvailableColors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  // quantity dropdown
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedQuantityItem, setSelectedQuantityItem] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ]);

  //modal

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to track if OTP is sent

  // const fetchColorByProduct = async (color) => {
  //   setLoading(true);
  //   try {
  //     const response1 = await axios.post(
  //       `${API_BASE_URL}/similarProductsByColor`
  //     );
  //   } catch (error) {
  //     console.error("error while fetching data", error);
  //     setError("Error in api");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const navigation = useNavigation();
  const gotoCartPage = () => {
    if (isLoggedIn) {
      console.log(setPhoneNumber);
      navigation.navigate(
        "CartScreen"

        //  {
        //   product_details: productDetails,
        //   selected_quantity: selectedQuantity,
        //   selected_color: selectedColor,
        //   selected_size: selectedSize,
        // }
      );
    } else {
      setIsModalVisible(true);
    }
  };

  //monitor login state for navigation

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("CartScreen");
    }
  }, [isLoggedIn]);

  // submit login
  const loginSubmit = () => {
    if (phoneNumber.length === 10) {
      console.log(phoneNumber);
      setIsOtpSent(true);
      navigation.navigate("EnterOtpScreen", { phoneNumber });
      // toggleModal();
      // setIsLoggedIn(true);
      // gotoCartPage();
    } else {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
    }
  };

  // allow numerics only

  const handleInputChange = (txt) => {
    const numericVal = txt.replace(/[^0-9]/g, "");
    setPhoneNumber(numericVal);
  };

  //modal function

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // add to cart function

  const AddToCart = () => {
    if (selectedSize && selectedColor && selectedQuantity) {
      if (isLoggedIn) {
        console.log(
          "selected size:",
          selectedSize,
          "selected color:",
          selectedColor,
          "selected quantity product:",
          selectedQuantity
        );
        const item = {
          id: productDetails._id,
          name: productDetails.name,
          finalprice: productDetails.final_price,
          mrp: productDetails.MRP,
          price_with_gst: productDetails.price_with_gst,
          gst_percentage: productDetails.gst_percentage,
          offer_percentage: productDetails.offer_percentage,
          image: `${API_BASE_URL}${productDetails.images[0]}`,
          size: selectedSize,
          available_size: sizes,
          color: selectedColor,
          quantity: selectedQuantity,
        };

        addToCart(item);
        console.log("added item", item);
        navigation.navigate("CartScreen");
        // Toast.show({
        //   type: "success",
        //   text1: "product added to cart",
        // });
        // navigation.navigate("ProductShow");
        // gotoCartPage();
      } else {
        setIsModalVisible(true);
      }
    } else {
      Alert.alert("Please select size, color and qunatity");
    }
  };

  // const baseUrl = "http://192.168.20.5:3000/";

  // call api to get product details data by passing id

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      console.log(productId);
      try {
        const response = await axios.get(
          `${API_BASE_URL}getProductById?productId=${productId}`
        );

        console.log("Product Details", response.data.product);
        console.log(response.data.product.images[0]);
        setProductDetails(response.data.product);

        const getColors = response.data.product.color;

        // call api to fetch product colors

        // const colorResponse = await axios.post(
        //   `http://192.168.20.5:3000/similarProductsByColor`,
        //   { productId }
        // );

        // const colors = colorResponse.data.colors.map((item) => item.colors);
        // console.log(colors);

        // console.log("color details", colorResponse.data.colors);

        // setAvailableColors(colors);
      } catch (error) {
        console.error("error while fetching data", error);
        setError("Error in api");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!productDetails) {
    return (
      <View>
        <Text>No product details available</Text>
      </View>
    );
  }

  const sizes = productDetails.variants.map((variant) => variant.size);
  console.log(sizes);
  console.log(productDetails.images);

  // go to order page

  const goToOrderPage = () => {
    navigation.navigate("OrderScreen", {
      productDetails,
      selectedColor,
      selectedQuantity,
      selectedSize,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${API_BASE_URL}${productDetails.images}` || "no image found",
        }}
        style={styles.image}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.productContainer}>
          <View style={styles.proTxtContainer}>
            <Text style={styles.productTxt}>
              {productDetails.name || "no product name found"}
            </Text>
            <Text style="priceTxt">
              $ {productDetails.final_price || "price not available"}
            </Text>
          </View>
          <Text style={styles.sizeTxt}>Size:</Text>
          <View style={styles.sizeContainer}>
            {sizes.length === 0 ? (
              <Text style={{ color: "red" }}>No Sizes Available</Text>
            ) : (
              sizes.map((size, index) => (
                <TouchableOpacity
                  style={styles.sizeValContainer}
                  key={index}
                  onPress={() => {
                    setSelectedSize(size);
                    console.log(" selected size:", size);
                  }}
                >
                  <Text
                    key={index}
                    style={[
                      styles.sizeVal,
                      selectedSize == size && {
                        backgroundColor: "black",
                        color: "white",
                      },
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>
          <Text style={styles.sizeTxt}>Colors:</Text>
          <View style={styles.colorContainer}>
            {productDetails.color.split(",").map((color, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedColor(color);
                  }}
                  style={[
                    styles.circleBorder,
                    selectedColor == color && {
                      borderWidth: 2,
                      borderColor: color,
                    },
                  ]}
                >
                  <View style={[styles.circle, { backgroundColor: color }]} />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.sizeTxt}>Quantity:</Text>
          <DropDownPicker
            open={quantityOpen}
            value={selectedQuantity}
            items={selectedQuantityItem}
            setOpen={setQuantityOpen}
            setValue={setSelectedQuantity}
            setItems={setSelectedQuantityItem}
            dropDownDirection="TOP"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            scrollViewProps={{ showsVerticalScrollIndicator: true }}
          />
        </View>
        <View style={styles.btnContainer1}>
          <TouchableOpacity
            style={[
              styles.btn1,
              !(selectedSize && selectedColor && selectedQuantity) &&
                styles.disabledBtn,
            ]}
            onPress={AddToCart}
            disabled={!(selectedSize && selectedColor && selectedQuantity)}
          >
            <Text style={styles.btnTxt}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={goToOrderPage}>
            <Text style={styles.btnTxt}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.headTxt}>Product Details</Text>
          <View style={styles.proDetailsContainer}>
            <View style={styles.proDetails}>
              <Text style={styles.proTxt}>Material Composition</Text>
              <Text style={styles.proTxt}>
                {productDetails.product_details[0]?.material_type || "N/A"}
              </Text>
            </View>
            <View style={styles.proDetails}>
              <Text>Pattern</Text>
              <Text>
                {productDetails.product_details[0]?.pattern_type || "N/A"}
              </Text>
            </View>
            <View style={styles.proDetails}>
              <Text>Fit Type</Text>
              <Text>
                {productDetails.product_details[0]?.fit_type || "N/A"}
              </Text>
            </View>
            <View style={styles.proDetails}>
              <Text>Sleeve Type</Text>
              <Text>
                {productDetails.product_details[0]?.sleeve_details || "N/A"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.sellerInfo}>
          <Text style={styles.headTxt}>Seller Details:</Text>
          <View style={styles.proDetailsContainer}>
            <View style={styles.proDetails}>
              <Text style={styles.proTxt}>Seller Name</Text>
              <Text style={styles.proTxt}>
                {productDetails.seller_details.name || "N/A"}
              </Text>
            </View>
            <View style={styles.proDetails}>
              <Text style={styles.proTxt}>Location</Text>
              <Text style={styles.proTxt}>
                {productDetails.seller_details.location || "N/A"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Use loginModal component */}

      <LoginModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        loginSubmit={loginSubmit}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        // setIsLoggedIn={setIsLoggedIn}
      />

      {/* <Modal
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
      </Modal> */}
    </View>
  );
};

export default ProductShow;

const styles = StyleSheet.create({
  image: {
    width: 425,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    // padding: 20,
    // alignItems: "center",
  },
  productTxt: {
    fontWeight: 700,
    fontSize: 18,
    width: 250,
    fontFamily: "MierA-Book",
    // backgroundColor: "blue",
  },
  proTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "blue",
    marginHorizontal: 15,
  },
  priceTxt: {
    fontWeight: 700,
    color: "gray",
    fontFamily: "MierA-Book",
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    gap: 5,
  },
  sizeValContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
  },
  sizeVal: {
    fontSize: 18,
    fontFamily: "MierA-Book",
  },
  sizeTxt: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: "MierA-Book",
  },
  sizeVal: {
    borderWidth: 2,
    borderRadius: 20,
    // width: 50,
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 2,
    paddingVertical: 3,
    // marginHorizontal: 3,
    fontWeight: "600",
    flex: 1,
    fontFamily: "MierA-Book",
  },
  productContainer: {
    // backgroundColor: "blue",
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circleBorder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  dropdown: {
    margin: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "transparent",
    borderRadius: 0,
    paddingHorizontal: 0,
    width: 120, // Adjust as needed
    marginHorizontal: 23,
    zIndex: 10,
  },

  dropdownContainer: {
    borderColor: "#0A3981",
    width: 130, // Adjust as needed
    marginHorizontal: 25,
    borderWidth: 0,
    // backgroundColor: "transparent",
    marginTop: 10,
    zIndex: 1000,
    zIndexInverse: 500,
    maxHeight: 200,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 15,
    // backgroundColor: "green",
  },
  btnContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
    gap: 10,
  },
  btn1: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#0A3981",
    color: "white",
    paddingHorizontal: 7,
    paddingVertical: 7,
    width: 10,
  },
  btn2: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#0A3981",
    paddingHorizontal: 7,
    paddingVertical: 7,
    width: 10,
  },
  headTxt: {
    fontWeight: "bold",
    marginVertical: 20,
  },
  proDetailsContainer: {
    // backgroundColor: "blue",
    width: 380,
    height: 150,
  },
  proDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  proTxt: {
    // fontWeight: "500",
    textAlign: "justify",
  },
  btnTxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "MierA-Book",
  },
  disabledBtn: {
    backgroundColor: "gray",
  },
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
