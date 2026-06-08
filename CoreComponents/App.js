import { Text, View } from "react-native";
import Greet from "./src/component/Greet";
import Styling from "./src/component/Styling";
import DynamicUI from "./src/component/DynamicUI";
import FlatListRender from "./src/component/FlatList";
import Forms from "./src/component/Forms";
import Networking from "./src/component/Networking";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/component/Navigation";
import Drawer from "./src/component/Navigation/Drawer";
import Tab from "./src/component/Navigation/Tab";

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


    // <DynamicUI />
    // <FlatListRender />
    // <Forms />
    // <Networking />

    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>

    // <Drawer />

    <Tab />
  );
};

export default App;
