import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import CategoryScreen from "./src/screen/CategoryScreen";
import WishlistScreen from "./src/screen/WishlistScreen";
import UserScreen from "./src/screen/UserScreen";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "./src/screen/EditProfileScreen";
import CartScreen from "./src/screen/CartScreen";
import DeleteConfirmation from "./src/screen/DeleteConfirmation";
import ProductShow from "./src/components/ProductShow";
import ProductCard from "./src/components/ProductCard";
import { CartProvider } from "./src/context/CartContext";
import LoginScreen from "./src/screen/LoginScreen";
import EnterOtpScreen from "./src/screen/EnterOtpScreen";
import CategoryProductListing from "./src/screen/CategoryProductListing";
import OrderScreen from "./src/screen/OrderScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ParamListBase } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const EditProfileStack = createStackNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";

  const hiddenScreens = [
    "ProductShow",
    "CartScreen",
    "OrderScreen",
    "EnterOtpScreen",
    "DeleteConfirmation",
    "SettingsScreen",
    "EditProfileScreen",
  ];

  return hiddenScreens.includes(routeName)
    ? { tabBarStyle: { display: "none" } }
    : { tabBarStyle: { display: "flex" } };
};

const UserStack = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const goToCart = () => {
    navigation.push("CartScreen");
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
        // options={{
        //   headerShown: true,
        //   headerTitle: "Account",
        //   headerRight: () => (
        //     <TouchableOpacity onPress={goToCart}>
        //       <MaterialCommunityIcons name="cart" size={25} />
        //     </TouchableOpacity>
        //   ),
        //   headerLeft: () => (
        //     <TouchableOpacity>
        //       <Feather name="arrow-left" size={25} />
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="DeleteConfirmation"
        component={DeleteConfirmation}
        options={{ headerShown: true }}
        // options={{
        //   headerLeft: () => (
        //     <Entypo name={"chevron-left"} size={25} style={styles.arrow} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="ProductShow"
        component={ProductShow}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const EditProfileNavigator = () => {
  return (
    <EditProfileStack.Navigator>
      <EditProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      ></EditProfileStack.Screen>
    </EditProfileStack.Navigator>
  );
};

// home stack for product navigation

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductShow" component={ProductShow} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerTitle: "Order Summary" }}
      />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryProductListing"
        component={CategoryProductListing}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          // screenOptions={{
          //   headerShown: false,
          //   tabBarShowLabel: false,
          //   tabBarActiveTintColor: "#0A3981",
          // }}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#0A3981",
            ...getTabBarVisibility(route),
          })}
        >
          {/* <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <AntDesign name={"home"} size={size} color={color} />;
            },
          }}
        ></Tab.Screen> */}
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ size, color }) => (
                <AntDesign name={"home"} size={size} color={color} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="categories"
            component={CategoryStack}
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <Ionicons
                    name={"grid-outline"}
                    size={size}
                    color={color}
                    style={styles.icon1}
                  />
                );
              },
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="My Products"
            component={WishlistScreen}
            options={{
              // headerShown: true,
              // headerLeft: () => (
              //   <TouchableOpacity>
              //     <Ionicons name="chevron-back" size={25} />
              //   </TouchableOpacity>
              // ),
              tabBarIcon: ({ size, color }) => {
                return (
                  <Ionicons name={"heart-outline"} size={size} color={color} />
                );
              },
            }}
          ></Tab.Screen>

          <Tab.Screen
            name="user"
            component={UserStack}
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome name={"user-o"} size={size} color={color} />
                );
              },
            }}
          ></Tab.Screen>
        </Tab.Navigator>
        <Toast />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  icon1: {
    backgroundColor: "#",
  },
});
