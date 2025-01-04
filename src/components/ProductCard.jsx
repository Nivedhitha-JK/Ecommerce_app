import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProductShow from "./ProductShow";

const ProductCard = ({ name, price, fullImgUrl, productId, onPress }) => {
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };

  const navigation = useNavigation();

  // goToProductShowPage = () => {
  //   navigation.navigate("ProductShow", { name, price, fullImgUrl, productid });
  // };

  console.log("product Id", productId);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: fullImgUrl }}
          // source={require("../assets/images/pro_1.jpeg")}
          style={styles.proImg}
        />
      </TouchableOpacity>
      <Text style={styles.proTxt}>{name}</Text>
      <Text style={styles.proTxt1}>
        {price ? `$${price}` : "price not available"}
      </Text>
      <TouchableOpacity style={styles.likecontainer} onPress={handleLike}>
        {isLike ? (
          <AntDesign
            name={"heart"}
            size={15}
            color={"red"}
            style={{ margin: 10 }}
          />
        ) : (
          <AntDesign
            name={"hearto"}
            size={15}
            color={"red"}
            style={{ margin: 10 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  proImg: {
    height: 250,
    width: "100%",
    borderRadius: 25,
    marginLeft: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    // backgroundColor: "blue",
    width: 150,
  },
  proTxt: {
    fontSize: 14,
    marginLeft: 15,
    fontWeight: "600",
  },
  proTxt1: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "600",
    color: "gray",
  },
  likecontainer: {
    height: 35,
    width: 35,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 40,
    position: "absolute",
    top: 20,
    right: 5,
  },
});