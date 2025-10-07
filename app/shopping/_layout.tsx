import { Stack } from 'expo-router'
import React from 'react'

export default function LayoutProduct() {
  return (
    <Stack>
        <Stack.Screen name='HomeScreen' options={{title: 'Home'}}/>
        <Stack.Screen name='ProductListScreen' options={{title: 'Product List'}}/>
        <Stack.Screen name='ProductDetailScreen' options={{title: 'Product Detail'}}/>
        <Stack.Screen name='CartScreen' options={{title: 'Cart'}}/>
    </Stack>
  )
}
