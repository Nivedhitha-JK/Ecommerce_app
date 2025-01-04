import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <Text>CategoryScreen</Text> */}
      <View style={styles.wCategory}>
        <View>
          <Text style={styles.cTxt}>Explore</Text>
          <Text style={styles.cTxt}>Our New Arrivals</Text>
        </View>
        <Image
          source={require("../../assets/images/allCategory.png")}
          style={styles.aCard}
        />
      </View>
      <View style={styles.wCategory}>
        <View>
          <Text style={styles.cTxt}>Women</Text>
          <Text style={styles.cTxt}>Upto 30% Offer</Text>
        </View>

        <Image
          source={require("../../assets/images/women_category.png")}
          style={styles.wCard}
        />
      </View>
      <View style={styles.wCategory}>
        <View>
          <Text style={styles.cTxt}>Men</Text>
          <Text style={styles.cTxt}>Upto 20% Offer</Text>
        </View>
        <Image
          source={require("../../assets/images/mCategory.png")}
          style={styles.mCard}
        />
      </View>
      <View style={styles.wCategory}>
        <View>
          <Text style={styles.cTxt}>Kids</Text>
          <Text style={styles.cTxt}>Upto 40% Offer</Text>
        </View>
        <Image
          source={require("../../assets/images/kidCategory.png")}
          style={styles.kCard}
        />
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
    backgroundColor: "#F5F5F5",
    margin: 20,
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
});
