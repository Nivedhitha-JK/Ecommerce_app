import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import ProductCard from "../components/ProductCard";
import LoaderKit from "react-native-loader-kit";

const ProductListing = ({ product, loading, onProductPress }) => {
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
          onPress={() => onProductPress(item._id)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item._id.toString()}
      renderItem={renderProduct}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={styles.productContainer}
      ListEmptyComponent={
        loading ? (
          // <Text style={{ textAlign: "center", marginTop: 30 }}>Loading...</Text>
          <View style={styles.loader}>
            <LoaderKit
              style={{ width: 50, height: 50 }}
              name={"Pacman"}
              color={"#0A3981"}
            />
          </View>
        ) : (
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/images/noProductFound.png")}
              style={styles.img}
            />
            <Text style={styles.txt}>No products found</Text>
          </View>
        )
      }
    />
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  productContainer: {
    // backgroundColor: "green",
    marginTop: 320,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    // backgroundColor: "green",
  },
  txt: {
    fontSize: 17,
    fontFamily: "Nunito-Bold",
    color: "#0A3981",
  },
  loader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
