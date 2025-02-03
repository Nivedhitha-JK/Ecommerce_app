import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import CategoryProductListing from "./CategoryProductListing";

const CategoryScreen = (category) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    console.log(category);
    navigation.navigate("CategoryProductListing", { category });
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <Text>CategoryScreen</Text> */}
      <TouchableOpacity
        style={styles.wCategory}
        onPress={() => handleCategoryPress("New Arrivals")}
      >
        <View>
          <Text style={styles.cTxt}>Explore</Text>
          <Text style={styles.cTxt}>Our New Arrivals</Text>
        </View>
        <Image
          source={require("../assets/images/allCategory.png")}
          style={styles.aCard}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wCategory}
        onPress={() => handleCategoryPress("Women")}
      >
        <View>
          <Text style={styles.cTxt}>Women</Text>
          <Text style={styles.cTxt}>Upto 30% Offer</Text>
        </View>

        <Image
          source={require("../assets/images/women_category.png")}
          style={styles.wCard}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wCategory}
        onPress={() => handleCategoryPress("Men")}
      >
        <View>
          <Text style={styles.cTxt}>Men</Text>
          <Text style={styles.cTxt}>Upto 20% Offer</Text>
        </View>
        <Image
          source={require("../assets/images/mCategory.png")}
          style={styles.mCard}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wCategory}
        onPress={() => handleCategoryPress("Kids")}
      >
        <View>
          <Text style={styles.cTxt}>Kids</Text>
          <Text style={styles.cTxt}>Upto 40% Offer</Text>
        </View>
        <Image
          source={require("../assets/images/kidCategory.png")}
          style={styles.kCard}
        />
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <View style={styles.priceBox}>
          <Text style={styles.priceTxt}>₹ UNDER 99</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceTxt}>₹ UNDER 199</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceTxt}>₹ UNDER 299</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceTxt}>₹ UNDER 399</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  wCategory: {
    width: "100%",
    height: 150,
    backgroundColor: "#0A3981",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    // margin: 10,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    // backgroundColor: "green",
    backgroundColor: "#F5F5F5",
    margin: 10,
    gap: 15,
  },
  cTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  wCard: {
    width: 500,
    height: 140,
    resizeMode: "contain",
    marginLeft: -120,
    marginTop: 10,
  },
  mCard: {
    width: 550,
    height: 150,
    resizeMode: "contain",
    marginLeft: -140,
  },
  kCard: {
    width: 550,
    height: 120,
    resizeMode: "contain",
    marginLeft: -130,
    marginTop: 30,
  },
  aCard: {
    width: 800,
    height: 120,
    resizeMode: "contain",
    marginLeft: -250,
    marginTop: 30,
  },
  priceContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 35,
    marginHorizontal: 2,
  },
  priceBox: {
    backgroundColor: "#0A3981",
    borderRadius: 40,
    width: 70,
    height: 70,
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  priceTxt: {
    color: "white",
    fontSize: 12,
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
  },
});
