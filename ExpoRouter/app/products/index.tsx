import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Products() {
  return (
    <View>
      <Text>Products</Text>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

    <Link href="/products/best-seller/ps-1">Best seller PS-1</Link>
      <Link href="/products/deals/black-friday/ps-1">Black Friday PS-1</Link>
      <Link href="/products/search/ps-1">Search PS-1</Link>
    </View>
  )
}

const styles = StyleSheet.create({})