// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import WelcomeScreen from '../screens/Welcome';
import ResgisterScreen from '../screens/Register';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
                name="Welcome"
                options={{headerShown:false}}
                component={WelcomeScreen}
            /> 
           <Stack.Screen
                name="Home"
                options={{headerShown:true}}
                component={HomeScreen}
            /> 
              <Stack.Screen
                name="Login"
                options={{headerShown:true}}
                component={LoginScreen}
            /> 
                <Stack.Screen
                name="Register"
                options={{headerShown:true}}
                component={ResgisterScreen}
            /> 
      </Stack.Navigator> 
  );
}

export default AuthStack;