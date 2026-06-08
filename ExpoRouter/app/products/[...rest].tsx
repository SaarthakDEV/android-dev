import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams();
    return (
      <View>
        <Text>Product {rest.join("/")}</Text>
      </View>
  )
}

const styles = StyleSheet.create({})