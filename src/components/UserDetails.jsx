import React from "react";
import { View, Text } from "react-native";

const UserDetails = () => {
  return (
    <View styles={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text>Enter Your Details here.. for smooth login</Text>
      </View>
    </View>
  );
};

export default UserDetails;
