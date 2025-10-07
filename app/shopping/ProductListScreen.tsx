import ProductCard from "@/components/ProductCart";
import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const products = [
  { id: 1, name: "Modern Chair", price: 150, image: "https://picsum.photos/200" },
  { id: 2, name: "Minimalist Lamp", price: 80, image: "https://picsum.photos/201" },
  { id: 3, name: "Wooden Desk", price: 300, image: "https://picsum.photos/202" },
  { id: 4, name: "Scented Candle", price: 25, image: "https://picsum.photos/203" },
];

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", margin: 10 },
});
