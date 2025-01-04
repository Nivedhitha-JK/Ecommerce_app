import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductCard from "../components/ProductCard";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import CartScreen from '../cart/CartScreen'
import axios from "axios";

const HomeScreen = () => {
  const width = Dimensions.get("window").width;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch data from api

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // loading starts
      try {
        const response = await axios.post(
          "http://192.168.20.5:3000/productList"
        );
        // console.log(response.data.products);
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

  const renderProduct = ({ item }) => {
    // const defaultImage = require("../assets/images/pro_1.jpeg");
    // const image = item.images && item.images.length > 0 ? item.images[0] : null;

    const apiUrl = "http://192.168.20.5:3000/";
    const imgProductUrl = item.images[0];

    const fullImgUrl = `${apiUrl}${imgProductUrl}`;

    // console.log(fullImgUrl);
    return (
      <View style={styles.gridItem}>
        <ProductCard
          name={item.name}
          price={item.price}
          fullImgUrl={fullImgUrl}
        />
      </View>
    );
  };

  // fetch api

  return (
    <View style={styles.container}>
      <Carousel
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
      />

      {/* <LinearGradient colors={["#D4EBF8", "#1F509A"]} style={styles.card}>
        <Image
          source={require("../assets/ad_img2-removebg-preview.png")}
          style={styles.img1}
        />
        <TouchableOpacity style={styles.cartContainer} onPress={goToCart}>
          <MaterialCommunityIcons name={"cart"} size={23} />
        </TouchableOpacity>

        <View style={styles.txtContainer}>
          <Text style={styles.bannerTxt}>Express Yourself</Text>
          <Text style={styles.subBannerTxt}>through Fashion ❤️</Text>
        </View>
      </LinearGradient> */}

      <View style={styles.inputContainer}>
        <View>
          <Fontisto name={"search"} size={25} style={styles.icon} />
        </View>
        <TextInput
          placeholder="search"
          style={styles.txtInput}
          placeholderTextColor="white"
        />
        <Octicons name={"filter"} size={25} style={styles.icon1} />
      </View>

      <FlatList
        data={product}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Loading...✌️
            </Text>
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No products found...🙅‍♀️
            </Text>
          )
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    backgroundColor: "#0A3981",
    borderRadius: 50,
    color: "white",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    width: "98%",
    marginTop: 330,
    // marginBottom: 100,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  // inputContainer: {
  //   borderRadius: 50,
  //   color: "white",
  //   height: 60,
  //   alignItems: "center",
  //   flexDirection: "row",
  //   width: "98%",
  //   marginTop: 20,
  //   borderWidth: 3,
  //   borderColor: "black",
  // },
  txtInput: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
    width: "70%",
    fontSize: 18,
    color: "white",
    // color: "Black",
  },
  icon: {
    margin: 10,
    // color: "white",
    backgroundColor: "white",
    padding: 6,
    borderRadius: 20,
  },
  icon1: {
    // margin: 10,
    // color: "white",
    backgroundColor: "white",
    padding: 6,
    borderRadius: 20,
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
  bannerTxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subBannerTxt: {
    // fontWeight: "700",
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: "NunitoRegular",
  },
  txtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
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
  gridItem: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
