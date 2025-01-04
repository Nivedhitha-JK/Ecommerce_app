import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderComp from "./HeaderComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const ProductShow = () => {
  const route = useRoute();
  const { productId } = route.params;
  console.log(productId);
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "http://192.168.20.5:3000/";

  // call api to get product details data by passing id

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      console.log(productId);
      try {
        const response = await axios.get(
          `http://192.168.20.5:3000/getProductById?productId=${productId}`
        );

        console.log("Product Details", response.data.product);
        console.log(response.data.product.images[0]);
        setProductDetails(response.data.product);
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

  return (
    <View style={styles.container}>
      {/* <View style={styles.arrowContainer}>
        <Ionicons name="chevron-back" size={23} />
        <Text>ProductShow component</Text>
      </View> */}

      <Image
        source={{
          uri: `${baseUrl}${productDetails.images}` || "no image found",
        }}
        style={styles.image}
      />
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
          <Text style={styles.sizeVal}>S</Text>
          <Text style={styles.sizeVal}>M</Text>
          <Text style={styles.sizeVal}>L</Text>
          <Text style={styles.sizeVal}>XL</Text>
          <Text style={styles.sizeVal}>XXL</Text>
        </View>
      </View>
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
    // flexWrap: "wrap",
    // backgroundColor: "blue",
  },
  proTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  priceTxt: {
    fontWeight: 700,
    color: "gray",
  },
  sizeContainer: {
    // paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  sizeTxt: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  sizeVal: {
    borderWidth: 1,
    borderRadius: 40,
    width: 30,
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginHorizontal: 3,
  },
});
