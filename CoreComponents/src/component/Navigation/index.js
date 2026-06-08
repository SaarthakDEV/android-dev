import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import About from "./About";
import { Pressable, Text } from "react-native";


const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator initialRouteName="Home" screenOptions={{
                title: "Welcome home",
                headerStyle: {
                    backgroundColor: "black"
                },
                headerTintColor: "red",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerRight: () => <Pressable onPress={() => alert("Menu button pressed")}>
                    <Text>Menu</Text>
                </Pressable>
            }}>
    <Stack.Screen name="Home" component={Home} initialParams={{
        result: "Default"
    }} />
    <Stack.Screen name="About" component={About} initialParams={{
        name: "John Doe"
    }}
        options={({ route }) => ({
            title: route.params.name
        })}
    />
   </Stack.Navigator> 
  )
}

export default Navigation
