import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "../views/Events";
import CurrentWeather from "../views/CurrentWeather";
import colors from "../../Colors";
import { Calendar, MagnifyingGlass, Sun } from "../../Icons";
import Search from "../views/Search";

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
        children={() => <CurrentWeather weather={props.currentWeather} today={props.localDateRange[0]} />}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Sun
                color={!focused ? colors.light.accent : colors.white}
                size="65%"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Events"
        children={() => <Events events={props.events} dateRange={props.gordonDateRange} />}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Calendar
                color={!focused ? colors.light.accent : colors.white}
                size="65%"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        children={() => <Search />}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MagnifyingGlass
                color={!focused ? colors.light.accent : colors.white}
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
