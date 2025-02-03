import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CarouselScreen = ({ carouselData, goToCart }) => {
  const width = Dimensions.get("window").width;
  return (
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
  );
};

export default CarouselScreen;

const styles = StyleSheet.create({
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
  img1: {
    width: "50%",
    height: 334,
    borderRadius: 20,
    margin: 10,
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
  txtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
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
});
