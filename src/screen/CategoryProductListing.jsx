import { StyleSheet, Text, View } from "react-native";
import React from "react";

const productsData = [
  {
    id: "1",
    name: "T-shirt",
    category: "Men",
    price: "₹499",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Jeans",
    category: "Men",
    price: "₹999",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    name: "Dress",
    category: "Women",
    price: "₹799",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    name: "Shoes",
    category: "Women",
    price: "₹1199",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "5",
    name: "Kids T-shirt",
    category: "Kids",
    price: "₹299",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "6",
    name: "Kids Shoes",
    category: "Kids",
    price: "₹599",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "7",
    name: "Jacket",
    category: "New Arrivals",
    price: "₹1499",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "8",
    name: "Sweater",
    category: "New Arrivals",
    price: "₹799",
    image: "https://via.placeholder.com/100",
  },
];

const CategoryProductListing = ({ route }) => {
  const { category } = route.params;
  console.log(category);
  return (
    <View style={styles.container}>
      <Text>Category wise product listing page</Text>
      {/* <Text style={{ fontWeight: "bold" }}>{category}</Text> */}
    </View>
  );
};
export default CategoryProductListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
  },
});
