import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';



const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
    
        {/* <Stack.Screen name= "Welcome" component={WelcomeScreen}/> */}
        <Stack.Screen name= "SignUp" component={SignUpScreen}/>
      {/* <Stack.Screen name= "SignIn" component={SignInScreen}/>*/}
        
               
      </Stack.Navigator>
    </NavigationContainer>
  );
};
