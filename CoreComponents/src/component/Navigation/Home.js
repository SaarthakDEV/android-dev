import React from "react";
import { Text, View, Button } from "react-native";

const Home = ({ navigation, route }) => {

  return (
    <View>
      <Text>Home {route.params.result}</Text>
      <Button title={"Go to About"} onPress={() => navigation.navigate("About", {
        name: "John Doe"
      })}
    />
    </View>
  );
};

export default Home;
