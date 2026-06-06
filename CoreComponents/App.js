import { Text, View } from "react-native";
import Greet from "./src/component/Greet";
import Styling from "./src/component/Styling";
import DynamicUI from "./src/component/DynamicUI";

const App = () => {
  return (
    // <View style={{ flex: 1, padding: 60, backgroundColor: "plum"}}>
    //  <Text>Hellow world</Text>
    //  <Greet />
    // </View>
    // <View
    //   style={{
    //     flex: 1,
    //     marginTop: 50,
    //     borderWidth: 6,
    //     borderColor: "#b6517d",
    //     // flexWrap: "wrap",
    //     // alignContent: "flex-end",
    //     // alignItems: "flex-end",
    //     // justifyContent: "center"

    //   }}
    // >
    //   <Styling style={{ backgroundColor: "red", top: 75, left: 75}}>Box 1</Styling>
    //   <Styling style={{ backgroundColor: "pink"}}>Box 2</Styling>
    //   <Styling style={{ backgroundColor: "yellow"}}>Box 3</Styling>
    //   <Styling style={{ backgroundColor: "plum", top: 75, left: 75, position: "absolute"}}>Box 4</Styling>
    //   <Styling style={{ backgroundColor: "orange" }}>Box 5</Styling>
    //   <Styling style={{ backgroundColor: "lightgreen" }}>Box 6</Styling>
    //   <Styling style={{ backgroundColor: "midnightblue" }}>Box 7</Styling>
    // </View>


    <DynamicUI />
  );
};

export default App;
