import { Text, View, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"


const About = ({ route, navigation: nav }) => {
    const navigation = useNavigation();
    const { name } = route.params;

  return (
        <View>
          <Text>About { name }</Text>
          <Button title={"Update name"} onPress={() => nav.setParams({
            name: "React native"
          })}/>
          <Button title={"Go back with data"} onPress={() => nav.navigate("Home", { result: "Data from about"})}/>
          <Button title={"Go to home"} onPress={() => navigation.navigate("Home")}/>
        </View>
  )
}

export default About