import { CartItem, Shopping } from "@/interfaces/shopping";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const STORAGE_KEY = "@cart_data";

  // 🧠 Đọc dữ liệu từ AsyncStorage khi khởi động
  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) setCart(JSON.parse(data));
      } catch (error) {
        console.error("Lỗi khi đọc giỏ hàng:", error);
      }
    })();
  }, []);

  // 💾 Lưu dữ liệu mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // ➕ Thêm sản phẩm vào giỏ
  const addToCart = (product: Shopping) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ➖ Xóa sản phẩm khỏi giỏ
  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // 🗑️ Xóa toàn bộ giỏ
  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, clearCart };
}