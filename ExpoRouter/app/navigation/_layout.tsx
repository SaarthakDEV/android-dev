import { Stack } from 'expo-router'
import About from './about'
import Navigation from '.'
import { Pressable, Text } from 'react-native'
import { Ionicons} from "@expo/vector-icons"

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: "Home",
      headerStyle: {
        backgroundColor: "purple",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}/>
    <Stack.Screen name="about" options={{
      headerRight: () => (
      <Pressable onPress={() => alert("Menu Pressed")}>
        <Text>Menu</Text>
      </Pressable>
    ),
      headerTitle: (props) => <Ionicons name='Person'/>
    }}/>
  </Stack>
}