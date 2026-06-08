import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Navigation() {
  return (
    <View>
      <Text>Navigation</Text>
      <Link href="navigation/about">About</Link>
    </View>
  )
}

const styles = StyleSheet.create({})