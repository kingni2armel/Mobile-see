import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/Authstack';

export default function App() {
  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
  );
}

