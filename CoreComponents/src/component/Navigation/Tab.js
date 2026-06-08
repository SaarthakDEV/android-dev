import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CourseListScreen from './CourseListScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from "@expo/vector-icons/Ionicons"
import Navigation from "./index";

const App = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarLabelPosition: "beside-icon",
            tabBarLabelVisibilityMode: "labeled",
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "purple"
        }}>
            <Tab.Screen name="Course List" component={CourseListScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: "My profile",
                tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color}/>,
                tabBarBadge: 3
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
            <Tab.Screen name="Stack" component={Navigation} options={{
                headerShown: false
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App