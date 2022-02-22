import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        children={() => <Home weather={props.localWeatherData} />}
        options={{
          tabBarIcon: ({focused}) => {
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
        children={() => <Events events={props.events} dateRange={props.dateRange} />}
        options={{
          tabBarIcon: ({focused}) => {
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
