import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../context/CartContext";

const CartCardScreen = ({ item, onUpdateCartItem }) => {
  console.log("ITEM", item);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(item.size || "M");
  const [quantity, setQuantity] = useState(Number(item.quantity) || 1);

  // access removeFromCart function from usecart context
  const { removeFromCart } = useCart();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDone = () => {
    onUpdateCartItem(item.id, { quantity, size: selectedSize });
    toggleModal();
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.txt1}>{item.name}</Text>
          <Text style={styles.txt1}>Size: {selectedSize}</Text>
          <Text style={styles.txt1}>Quantity: {quantity}</Text>
          <Text style={styles.txt1}>$ {item.finalprice}</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.changeBtn}>Change Size/Quantity</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.trashContainer} onPress={handleDelete}>
        <MaterialCommunityIcons name="delete" size={40} color="#0A3981" />
      </TouchableOpacity>

      {/* Bottom Drawer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Size</Text>
            <View style={styles.sizeContainer}>
              {item.available_size &&
                item.available_size.map((size) => (
                  <Pressable
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={[
                      styles.sizeOption,
                      selectedSize === size && styles.selectedOption,
                    ]}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        selectedSize === size && styles.selectedText,
                      ]}
                    >
                      {size}
                    </Text>
                  </Pressable>
                ))}
            </View>
            <Text style={styles.modalTitle}>Select Quantity</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() =>
                  setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
                }
              >
                <Text style={styles.quantityBtn}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                <Text style={styles.quantityBtn}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.doneBtn} onPress={handleDone}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartCardScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 6,
    paddingHorizontal: 10,
    gap: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  imgContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 15,
  },
  detailsContainer: {
    flex: 2,
  },
  details: {
    marginBottom: 10,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  trashContainer: {
    alignItems: "flex-end",
    marginHorizontal: 10,
    flex: 0.3,
  },
  changeBtn: {
    color: "#0A3981",
    fontWeight: "bold",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // height: 700,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  sizeOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: "#0A3981",
  },
  sizeText: {
    fontSize: 16,
  },
  selectedText: {
    color: "white",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  quantityBtn: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  doneBtn: {
    backgroundColor: "#0A3981",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  doneText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
