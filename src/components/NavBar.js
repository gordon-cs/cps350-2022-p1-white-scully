import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Events from "../views/Events";
import Home from "../views/Home";
import colors from "../../Colors";
import { Calendar, Sun } from "../../Icons";

const Tab = createBottomTabNavigator();

const NavBar = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.light.navbar,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home localWeatherData={props.localWeatherData} />}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Sun
                color={focused ? colors.light.accent : colors.white}
                size="65%"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Events"
        children={() => <Events events={props.events} />}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Calendar
                color={focused ? colors.light.accent : colors.white}
                size="65%"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
