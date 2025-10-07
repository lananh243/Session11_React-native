import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
    const route = useRouter();
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Mini Shop !</Text>
        <Text style={styles.text}>Find the best products here</Text>
        <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqEDT0bJVjBM0CeYq__9BJUazVv5qKZTojw&s'}}/>
        <TouchableOpacity style={styles.button} onPress={() => route.push("/bai1/ProductListScreen")} >
            <Text style={styles.buttonText}>Brower All Products</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 25
    },
    text: {
        fontSize: 16,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginTop: 25
    },
    button: {
        backgroundColor: "#007BFF", 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 25,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
})