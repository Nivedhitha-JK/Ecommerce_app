import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/user/UserScreen";
import EditProfileScreen from "../screens/user/EditProfileScreen";
import DeleteConfirmation from "../screens/user/DeleteConfirmation";
import CartScreen from "../screens/cart/CartScreen";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: "false" }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: "false" }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: "false" }}
      />
      <Stack.Screen
        name="DeleteConfirmation"
        component={DeleteConfirmation}
        options={{ headerShown: "false" }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
