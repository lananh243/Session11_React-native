import { FontAwesome } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'

export default function LayoutProduct() {
  return (
    <Stack>
        <Stack.Screen name='HomeScreen' options={{title: 'Home'}}/>
        <Stack.Screen
          name="ProductListScreen"
          options={{
            title: "Product List",
            headerRight: () => (
              <Pressable onPress={() => router.push("/shopping/CartScreen")}>
                <FontAwesome name="shopping-cart" size={22} color="#007AFF" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen name='ProductDetailScreen' options={{title: 'Product Detail'}}/>
        <Stack.Screen name='CartScreen' options={{title: 'Cart'}}/>
    </Stack>
  )
}
