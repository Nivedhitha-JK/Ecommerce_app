import { StyleSheet, View, Dimensions, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CartScreen from "./CartScreen";
import axios from "axios";
import SubCategoryScreen from "./SubCategoryScreen";
import TopSearchScreen from "./TopSearchScreen";
import LoginModal from "./LoginModal";
import API_BASE_URL from "../config/api";
import CarouselScreen from "./CarouselScreen";
import ProductListing from "./ProductListing";
import {
  savePhoneNumber,
  getPhoneNumber,
  removePhoneNumber,
} from "../utils/storageService";

const HomeScreen = () => {
  const width = Dimensions.get("window").width;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  //login modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // check login status when app starts

  useFocusEffect(
    React.useCallback(() => {
      const checkLoginStatus = async () => {
        const storedPhoneNum = await getPhoneNumber();
        if (storedPhoneNum) {
          setIsLoggedIn(true);
          setPhoneNumber(storedPhoneNum);
        } else {
          setIsLoggedIn(false);
          setPhoneNumber("");
        }
      };

      checkLoginStatus();

      return () => {}; // Return a cleanup function or undefined
    }, []) // Dependencies should be an empty array to run once when focused
  );

  // fetch data from api

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // loading starts
      try {
        const response = await axios.post(`${API_BASE_URL}productList`);
        console.log(response.data.products);
        // const apiUrl = "http://192.168.20.5:3000/";
        // const imgProductUrl = response.data.products[0].images[0];

        // const fullImgUrl = `${apiUrl}${imgProductUrl}`;
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // loading ends
      }
    };
    fetchProducts();
  }, []); // empty array ensures it run only once

  // data for carousel

  const carouselData = [
    {
      title: "Express Yourself",
      subtitle: "through Fashion ❤️",
      colors: ["#D4EBF8", "#1F509A"], // Gradient colors
      image: require("../assets/images/ad_img2-removebg-preview.png"),
    },
    {
      title: "Discover New Styles",
      subtitle: "every day 🌟",
      colors: ["#D4EBF8", "#1F509A"],
      image: require("../assets/images/Men_WoBg.png"),
    },
    {
      title: "Stay in Trend",
      subtitle: "with us 😇",
      colors: ["#D4EBF8", "#1F509A"],
      image: require("../assets/images/kid_woBG.png"),
    },
  ];

  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate("CartScreen");
  };

  // allow users to type numerics only

  const handleInputChange = (txt) => {
    const numericVal = txt.replace(/[^0-9]/g, "");
    setPhoneNumber(numericVal);
  };

  //login

  const loginSubmit = async () => {
    const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);
    if (isValidPhoneNumber) {
      await savePhoneNumber(phoneNumber);
      setIsLoggedIn(true);
      setIsModalVisible(false);
      navigation.navigate("EnterOtpScreen", { phoneNumber });
    } else {
      Alert.alert("Invalid Number", "Please enter a 10-digit phone number.");
    }
  };

  // clear phn num

  const clearPhoneNum = () => {
    setPhoneNumber("");
  };
  const toggleModal = () => {
    console.log("Toggle Btn is clickeddddd");
    setIsModalVisible(!isModalVisible);
  };

  const renderProduct = ({ item }) => {
    // const defaultImage = require("../assets/images/pro_1.jpeg");
    // const image = item.images && item.images.length > 0 ? item.images[0] : null;

    const apiUrl = "http://192.168.20.5:3000/";
    const imgProductUrl = item.images[0];

    const fullImgUrl = `${apiUrl}${imgProductUrl}`;
    console.log("Product ID:", item._id);

    // console.log(fullImgUrl);
    return (
      <View style={styles.gridItem}>
        <ProductCard
          name={item.name}
          price={item.price}
          fullImgUrl={fullImgUrl}
          productId={item._id}
          onPress={() =>
            navigation.navigate("ProductShow", { productId: item._id })
          }
        />
      </View>
    );
  };

  // fetch api

  // product details navigation

  const handleProductPress = (productId) => {
    navigation.navigate("ProductShow", { productId });
  };

  //logout function
  const logout = async () => {
    await removePhoneNumber();
    setIsLoggedIn(false);
    setPhoneNumber("");
  };

  return (
    <View style={styles.container}>
      <View>
        <TopSearchScreen
          toggleModal={toggleModal}
          isLoggedIn={isLoggedIn}
          phoneNumber={phoneNumber}
        />
        <LoginModal
          isVisible={isModalVisible}
          phoneNumber={phoneNumber}
          toggleModal={toggleModal}
          handleInputChange={handleInputChange}
          loginSubmit={loginSubmit}
          isLoggedIn={isLoggedIn}
        />
      </View>

      {/* subcategoryscreen component to show sub categories */}
      <View style={styles.subCategoryContainer}>
        <SubCategoryScreen />
      </View>

      {/* <Carousel
        width={width}
        height={300}
        data={carouselData}
        renderItem={({ item }) => (
          <LinearGradient colors={["#D4EBF8", "#1F509A"]} style={styles.card}>
            <Image source={item.image} style={styles.img1} />
            <TouchableOpacity style={styles.cartContainer} onPress={goToCart}>
              <MaterialCommunityIcons name={"cart"} size={23} />
            </TouchableOpacity>

            <View style={styles.txtContainer}>
              <Text style={styles.bannerTxt}>{item.title}</Text>
              <Text style={styles.subBannerTxt}>{item.subtitle}</Text>
            </View>
          </LinearGradient>
        )}
        autoPlay={true}
        scrollAnimationDuration={1000}
        loop={true}
      /> */}
      <CarouselScreen carouselData={carouselData} goToCart={goToCart} />

      <ProductListing
        product={product}
        loading={loading}
        onProductPress={handleProductPress}
      />

      {/* <FlatList
        data={product}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.productContainer}
        ListEmptyComponent={
          loading ? (
            <Text style={{ textAlign: "center", marginTop: 30 }}>
              Loading...
            </Text>
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No products found.
            </Text>
          )
        }
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 10,
    // backgroundColor: "green",
  },
  inputContainer: {
    borderRadius: 50,
    color: "#0A3981",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    borderWidth: 3,
    borderColor: "#0A3981",
    gap: 2,
  },

  txtInput: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
    width: "70%",
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
  },
  icon: {
    // margin: 10,
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 30,
  },
  icon1: {
    // margin: 10,
    color: "white",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 30,
  },
  card: {
    width: "95%",
    height: 300,
    // backgroundColor: "#0A3981",
    borderRadius: 10,
    // opacity: 0.9,
    // flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  img: {
    width: "50%",
    height: 292,
    borderRadius: 20,
  },
  img1: {
    width: "50%",
    height: 334,
    borderRadius: 20,
    margin: 10,
  },
  imgContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    // flexDirection: "row",
  },
  cartContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginLeft: 300,
    marginTop: 10,
  },

  categoryCards: {
    flex: 1,
    marginTop: 320,
    // flexDirection: "row",
    // gap: 2,
    // justifyContent: "space-between",
    backgroundColor: "green",
  },
  categoryContainer: {
    width: "48%",
    height: 100,
    backgroundColor: "#0A3981",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    // margin: 10,
    flexDirection: "row",
    marginHorizontal: 2,
  },
  aCard: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: -16,
    // marginTop: 2,
  },

  scrollContent: {
    flex: 1,
    flexDirection: "row", // Ensure horizontal layout,
    // backgroundColor: "yellow",
  },
  div1: {
    flexDirection: "row",
    gap: 10,
  },
  div2: {
    flexDirection: "row",
    gap: 10,
    marginTop: 110,
  },
  userContainer: {
    marginVertical: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    // backgroundColor: "blue",
  },
  productContainer: {
    // backgroundColor: "green",
    marginTop: 320,
  },
  subCategoryContainer: {
    // backgroundColor: "green",
    height: 100,
    marginVertical: 5,
    // flexDirection: "row",
  },
});
