// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import WelcomeScreen from '../screens/Welcome';
import ResgisterScreen from '../screens/Register';
import TabNavigation from './TabNavigator';
import ContactScreen from '../screen2/Contact';
import PrefereceScreen from '../screen2/Preference';

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
             <Stack.Screen
                name="HomeStart"
                options={{headerShown:false}}
                component={TabNavigation}
            />
              <Stack.Screen
                name="Contact"
                options={{headerShown:true}}
                component={ContactScreen}
            />
             <Stack.Screen
                name="Preference"
                options={{headerShown:true}}
                component={PrefereceScreen}
            />
      </Stack.Navigator> 
  );
}

export default AuthStack;