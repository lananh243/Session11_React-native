import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }: any) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          router.push(`/shopping/ProductDetailScreen?id=${product.id}`)
        }
      >
        <Image source={{ uri: product.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 8,
    padding: 10,
    elevation: 3,
  },
  image: { width: "100%", height: 120, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  price: { color: "#007AFF", fontWeight: "600", marginBottom: 5 },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
