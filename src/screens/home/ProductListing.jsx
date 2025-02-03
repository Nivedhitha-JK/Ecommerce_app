import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard";
const ProductListing = ({ product, loading }) => {
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
          <Text style={{ textAlign: "center", marginTop: 30 }}>Loading...</Text>
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No products found.
          </Text>
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
});
