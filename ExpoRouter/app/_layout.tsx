import { Redirect, Slot } from "expo-router";
import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

export default function RootLayout() {
  
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }}>
    //     <View style={{ backgroundColor: "red", padding: 10 }}>
    //       <Text>Header</Text>
    //     </View>

    //     <View style={{ flex: 1 }}>
    //       <Slot />
    //     </View>

    //     <View style={{ backgroundColor: "blue", padding: 10 }}>
    //       <Text>Footer</Text>
    //     </View>
    //   </SafeAreaView>
    // </SafeAreaProvider>

    <Slot />
  );
}