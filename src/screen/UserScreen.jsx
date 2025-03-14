import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderComp from "../components/HeaderComp";
import { iconSize, spacing } from "../constants/dimensions";
import { color } from "../constants/color";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { removePhoneNumber, getPhoneNumber } from "../utils/storageService";
import LoginModal from "../components/LoginModal";
const UserScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { phoneNumber } = route.params || {};

  const toEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const getPhnNum = await getPhoneNumber();
      setIsLoggedIn(!!getPhnNum);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    if (isLoggedIn) {
      await removePhoneNumber();
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Please Login", "You need to log in first to logout.");
      // setIsModalVisible(true);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp />
      <ScrollView style={styles.container}>
        {/* header section */}
        <View style={styles.container1}>
          <View style={styles.userView}>
            <Text style={styles.letter}>S</Text>
          </View>

          <TouchableOpacity style={styles.userView1} onPress={toEditProfile}>
            {phoneNumber ? (
              <Text style={styles.txt1}>{phoneNumber}</Text>
            ) : (
              <Text style={styles.txt1}>Saravana</Text>
            )}

            <Entypo name={"chevron-right"} size={25} style={styles.arrow} />
          </TouchableOpacity>
        </View>

        {/* smartcoins section */}
        <View style={styles.container2}>
          <View>
            <Text style={styles.txt3}>SmartCoins</Text>
          </View>
          <TouchableOpacity style={styles.arrBg}>
            <Entypo name={"chevron-right"} size={25} style={styles.arrow1} />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity style={styles.box1}>
            <Feather name="phone-call" size={30} />
            <Text style={styles.bTxt}>Help Centre</Text>
          </TouchableOpacity>
          <View style={styles.box2}>
            <Entypo name="language" size={30} />
            <Text style={styles.bTxt}>Change Language</Text>
          </View>
        </View>

        {/* list section */}
        <View style={styles.listSection}>
          <Text style={styles.headTxt}>My Payments</Text>
          <TouchableOpacity style={styles.list1}>
            <Icon name="account-balance-wallet" size={25} color="#000" />
            <Text style={styles.list1Txt}>Bank & UPI Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list1}>
            <Icon name="payment" size={25} color="#000" />
            <Text style={styles.list1Txt}>Payment & Refund</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.headTxt}>My Activity</Text>
          <TouchableOpacity style={styles.list1}>
            <Feather name="box" size={25} color="#000" />
            <Text style={styles.list1Txt}>Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list1}>
            <Icon name="favorite" size={25} color="#000" />
            <Text style={styles.list1Txt}>Wishlisted Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list1}>
            <Entypo name="address" size={25} color="#000" />
            <Text style={styles.list1Txt}>Your Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.headTxt}>Others</Text>
          {/* <TouchableOpacity style={styles.list1}>
            <Feather name="box" size={25} color="#000" />
            <Text style={styles.list1Txt}>Community</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.list1}>
            <AntDesign name="star" size={25} color="#000" />
            <Text style={styles.list1Txt}>Rate Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list1} onPress={handleLogout}>
            <MaterialIcons name="logout" size={25} color="#000" />
            <Text style={styles.list1Txt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoginModal toggleModal={toggleModal} isModalVisible={isModalVisible} />
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    padding: spacing.md,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#7F8487",
    marginTop: 5,
    marginLeft: 5,
  },
  container1: {
    backgroundColor: "#0A3981",
    height: 130,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 10,
  },
  userView: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 100,
    margin: 10,
  },
  userView1: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  userView2: {
    marginRight: 30,
  },
  userTxt: {
    color: "Gray",
  },
  letter: {
    fontWeight: "bold",
    fontSize: 60,
    textAlign: "center",
    marginTop: 8,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
    color: "white",
  },
  txt2: {
    fontSize: 15,
    color: "white",
  },
  edit: {
    color: "white",
  },
  txtOption: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  optContainer: {
    // justifyContent: "center",
    // flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginTop: 10,
  },
  arrow: {
    marginRight: 90,
    color: "white",
  },
  container2: {
    flexDirection: "row",
    backgroundColor: "#0A3981",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  txt3: {
    color: "white",
    letterSpacing: 1,
  },
  arrow1: {
    color: "black",
  },
  arrBg: {
    backgroundColor: "white",
    borderRadius: 15,
  },
  box1: {
    width: 170,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 5,
    fontFamily: "Helvetica",
    cursor: "pointer",
  },
  box2: {
    width: 170,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 5,
    fontFamily: "Helvetica",
  },
  box: {
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
  },
  bTxt: {
    fontSize: 15,
    letterSpacing: 1,
  },
  headTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  list1: {
    flexDirection: "row",
    gap: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
    marginVertical: 10,
  },
  list1Txt: {
    fontSize: 15,
    marginBottom: 20,
  },
  listSection: {
    marginTop: 15,
  },
});
