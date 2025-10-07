import { useCart } from "@/hooks/useCart";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Giỏ hàng của bạn</Text>

      {cart.length === 0 ? (
        <Text>Giỏ hàng trống</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>
                  {item.name} x{item.quantity}
                </Text>
                <Text>${item.price * item.quantity}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={{ color: "red" }}>Xóa</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Text style={styles.total}>Tổng cộng: ${total}</Text>
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={{ color: "#fff" }}>Xóa toàn bộ</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: { fontSize: 16 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  clearButton: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
});
