import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: (props) => <Header hasRight {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
