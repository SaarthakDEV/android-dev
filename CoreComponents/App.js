import { View, Text, Image, ImageBackground } from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
      <View style={{ height: 100, width: 100, backgroundColor: "skyblue"}} ></View>
      <View style={{ height: 100, width: 100, backgroundColor: "lightgreen"}} ></View>

      <Text>Hello <Text style={{color: "red"}}>World</Text></Text>

      <Image source={{ uri: "https://picsum.photos/id/237/300/300"}} style={{width: 300, height: 300}}/>
      <ImageBackground source={{ uri: "https://picsum.photos/id/237/300/300"}} style={{color: "white", flex: 1}}>
        Image text
      </ImageBackground>
    </View>
  )
}

export default App