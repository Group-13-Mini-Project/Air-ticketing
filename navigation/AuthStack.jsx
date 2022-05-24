import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../components";
import { SignInScreen, SignUpScreen, WelcomeScreen } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ header: (props) => <Header {...props} /> }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
