import { FontAwesome } from '@expo/vector-icons'
import { Stack, Tabs } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack>
        {/* <Stack.Screen name='(tabs)' /> */}
        <Stack.Screen name='shopping'/>
    </Stack>
  )
}
