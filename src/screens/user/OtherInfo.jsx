import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const OtherInfo = () => {
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState();

  //api data

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderProduct = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );

  return (
    <View></View>
    // {loading ? (
    //   <Text style={styles.loadingText}>Loading...</Text>
    // ) : (
    //   <FlatList
    //     data={products}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={renderProduct}
    //     numColumns={2}
    //   />
    // )}
  );
};

export default OtherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientContainer: {
    width: "100%",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
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
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: "NunitoRegular",
  },
});
