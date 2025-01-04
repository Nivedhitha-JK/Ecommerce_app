import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
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
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const EditProfileStack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeleteConfirmation"
        component={DeleteConfirmation}
        options={{ headerShown: false }}
        // options={{
        //   headerLeft: () => (
        //     <Entypo name={"chevron-left"} size={25} style={styles.arrow} />
        //   ),
        // }}
      />
      {/* <Stack.Screen
        name="ProductShow"
        component={ProductShow}
        options={{ headerShown: false }}
      /> */}
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
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
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
        />
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
    </NavigationContainer>
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
