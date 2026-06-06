import React from 'react'
import { Pressable, Text } from 'react-native'

const CustomButton = ({ onPress, title}) => {
  return (
    <Pressable
    onPress={onPress}
    style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        borderRadius: 10,
        padding: 20,
    }}
    >
        <Text style={{color: "red", fontSize: 18}}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton