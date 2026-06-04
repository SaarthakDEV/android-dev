import { Text, View } from "react-native";
import Greet from "./src/component/Greet";
import Styling from "./src/component/Styling";

const App = () => {
  return (
    // <View style={{ flex: 1, padding: 60, backgroundColor: "plum"}}>
    //  <Text>Hellow world</Text>
    //  <Greet />
    // </View>
    <View style={{ marginTop: 50, borderWidth: 6, borderColor: "#b6517d"}}>
      <Styling style={{ backgroundColor: "red" }}>Box 1</Styling>
      <Styling style={{ backgroundColor: "pink" }}>Box 2</Styling>
      <Styling style={{ backgroundColor: "yellow" }}>Box 3</Styling>
      <Styling style={{ backgroundColor: "plum" }}>Box 4</Styling>
      <Styling style={{ backgroundColor: "orange" }}>Box 5</Styling>
      <Styling style={{ backgroundColor: "lightgreen" }}>Box 6</Styling>
      <Styling style={{ backgroundColor: "midnightblue" }}>Box 7</Styling>
    </View>
  );
};

export default App;
