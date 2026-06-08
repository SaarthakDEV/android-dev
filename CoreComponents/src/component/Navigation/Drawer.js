import "react-native-gesture-handler";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./DashboardScreen";
import SettingsScreen from "./SettingsScreen";

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
            title: "Dashboard title",
            drawerLabel: "Dashboard label",
            drawerActiveTintColor: "red",
            drawerActiveBackgroundColor: "black",
            drawerContentStyle: {
                backgroundColor: "midnightblue"
            }
        }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;


