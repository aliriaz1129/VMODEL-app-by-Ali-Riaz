import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logow.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 30,
    position:'absolute',
    bottom:20,
    marginBottom: 8,
  },
})
