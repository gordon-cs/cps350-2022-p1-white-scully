import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "../views/Events";
import Home from "../views/Home";
import colors from "../../Colors";

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
      />
      <Tab.Screen
        name="Events"
        children={() => <Events events={props.events}/>}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
