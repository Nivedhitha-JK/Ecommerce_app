import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import CategoryScreen from "../screens/category/CategoryScreen";
import WishlistScreen from "../screens/wishlist/WishlistScreen";
import UserStack from "./StackNavigatior";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0A3981",
      }}
    >
      <Tab.Screen
        name="categories"
        component={CategoryScreen}
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <AntDesign name={"home"} size={size} color={color} />;
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="account"
        component={WishlistScreen}
        options={{
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
            return <FontAwesome name={"user-o"} size={size} color={color} />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
