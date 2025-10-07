import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Shopping } from "@/interfaces/shopping";

const products: Shopping[] = [
  {
    id: 1,
    name: "Modern Chair",
    price: 150,
    image: "https://picsum.photos/200",
    description:
      "A very comfortable and modern chair for your living room. Made with high-quality materials, it provides both style and comfort. Perfect for reading, relaxing, or just adding a touch of elegance to your space.",
  },
  {
    id: 2,
    name: "Minimalist Lamp",
    price: 80,
    image: "https://picsum.photos/201",
    description:
      "A sleek and minimalist lamp that brightens your room while saving space. Ideal for modern interiors.",
  },
  {
    id: 3,
    name: "Wooden Desk",
    price: 300,
    image: "https://picsum.photos/202",
    description:
      "A durable wooden desk perfect for study or work. Elegant design with plenty of workspace.",
  },
  {
    id: 4,
    name: "Scented Candle",
    price: 25,
    image: "https://picsum.photos/203",
    description:
      "A scented candle that adds a warm and relaxing fragrance to your room.",
  },
];

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <Text>Không tìm thấy sản phẩm</Text>;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    color: "#007AFF",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
    color: "#555",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
