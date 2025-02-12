import axios from "axios";
import API_BASE_URL from "../config/api";

//fetch product details

export const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}getProductById?productId=${productId}`
    );
    return response.data.product;
  } catch (error) {
    console.error("Error Fetching product details:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}productList`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};

// check user phn num

export const phoneNoLogin = async (phoneNumber) => {
  try {
    const response = await axios.post(`${API_BASE_URL}moblieLogin`, {
      phone_number: phoneNumber,
    });

    if (response.status === false) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    console.log("API error", error);
    if (error.response && error.response.status === false) {
      throw new Error(
        response.message || "Something Went Wrong, please try again"
      );
    }
    throw new Error("Could not send OTP. Please try again.");
  }
};

//verify otp

export const verifyPhnOtp = async (phoneNumber, otp) => {
  try {
    const response = await axios.post(`${API_BASE_URL}verifyOtp`, {
      phone_number: phoneNumber,
      otp: otp,
    });
    if (response.status === false) {
      throw new Error(response.message);
    }

    return response;
  } catch (error) {
    console.log("API error", error);
    if (error.response && error.response.status === false) {
      throw new Error(
        response.message || "Something Went Wrong, please try again"
      );
    }
    throw new Error("Could not send OTP. Please try again.");
  }
};

// wishlist the product
export const addWishlist = async (productId)=>{
  try{
   const response = await axios.post(`${API_BASE_URL}
    `)
  }
  catch(error){
    console.error("API error",error);
  }
}
