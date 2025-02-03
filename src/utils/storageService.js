import AsyncStorage from "@react-native-async-storage/async-storage";

//save phone num in async storage
export const savePhoneNumber = async (phoneNumber) => {
  try {
    await AsyncStorage.setItem("userPhoneNumber", phoneNumber);
  } catch (error) {
    console.error("Error saving phone number", error);
  }
};

// get phone(retrive) num from async storage

export const getPhoneNumber = async () => {
  try {
    const phoneNumber = await AsyncStorage.getItem("userPhoneNumber");
    return phoneNumber;
  } catch (error) {
    console.error("Error retrieving phone number", error);
    return null;
  }
};

// remove phone number (logout)

export const removePhoneNumber = async () => {
  try {
    await AsyncStorage.removeItem("userPhoneNumber");
  } catch (error) {
    console.error("Error removing phone number", error);
  }
};
