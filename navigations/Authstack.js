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
import UpdatePasswordScreen from '../screen2/Update/Password';
import UpdateLangueScreen from '../screen2/Update/Langue';
import ThemeScreen from '../screen2/Update/Theme';
import AnnonceScreen from '../screen2/Annonce';
import UpdateProfilScreen from '../screen2/Update/Profile';
import AideScreen from '../screen2/Aide';
import HomeScreenAlert from '../screen2/Alert/Home';
import CreateAlertScreen from '../screen2/Alert/Create';
import ListeAlertScreen from '../screen2/Alert/Liste';
import UpdateAlertScreen from '../screen2/Alert/Update';
import UpdateEmailScreen from '../screen2/Update/Email';
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
             <Stack.Screen
                name="Password"
                options={{headerShown:true}}
                component={UpdatePasswordScreen}
            />
            <Stack.Screen
                name="Langue"
                options={{headerShown:true}}
                component={UpdateLangueScreen}
            />
            <Stack.Screen
                name="Theme"
                options={{headerShown:true}}
                component={ThemeScreen}
            />
            <Stack.Screen
                name="Annonce"
                options={{headerShown:true}}
                component={AnnonceScreen}
            />
            <Stack.Screen
                name="Edit"
                options={{headerShown:true}}
                component={UpdateProfilScreen}
            />
             <Stack.Screen
                name="Aide"
                options={{headerShown:true}}
                component={AideScreen}
            />
            <Stack.Screen
                name="Alert"
                options={{headerShown:true}}
                component={HomeScreenAlert}
            />
            <Stack.Screen
                name="Create"
                options={{headerShown:true}}
                component={CreateAlertScreen}
            />
             <Stack.Screen
                name="Liste"
                options={{headerShown:true}}
                component={ListeAlertScreen}
            />
             <Stack.Screen
                name="Modifier"
                options={{headerShown:true}}
                component={UpdateAlertScreen}
            />
              <Stack.Screen
                name="Email"
                options={{headerShown:true}}
                component={UpdateEmailScreen}
            />
      </Stack.Navigator> 
  );
}

export default AuthStack;