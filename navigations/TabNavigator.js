import * as React from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from "../styles";
import CourseScreen from '../screen2/Course';
import TrajetScreen from '../screen2/Trajet';
import ExpedierScreen from '../screen2/Expedier';
import ChatScreen from '../screen2/Chat';
import AccountScreen from '../screen2/Account';

const Tab = createBottomTabNavigator();


function TabNavigation()
{
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: colors.WHITE,
                },
                tabBarActiveTintColor: colors.PRIMARY,
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="Trajet" 
                component={TrajetScreen}  
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name='rocket-outline'
                            size={20}
                            color={color}
                        />
                    )
                }}
            />  
            <Tab.Screen 
                name="Expedier" 
                component={ExpedierScreen}   
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name='airplane-outline'
                            size={20}
                            color={color}
                        />
                    )
                }}  
            />
             <Tab.Screen 
                name="Course" 
                component={CourseScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity style={styles.btnAdd}>
                            <Ionicons
                                name='add'
                                size={30}
                                color={colors.WHITE}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen 
                name="Tchat" 
                component={ChatScreen}  
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name='chatbubble-outline'
                            size={20}
                            color={color}
                        />
                    )
                }}   
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen}  
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name='person-outline'
                            size={20}
                            color={color}
                        />
                    )
                }}    
            />
        
        </Tab.Navigator>
        )
}
const styles = StyleSheet.create({
    btnAdd: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: colors.WHITE,
        backgroundColor: colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        top: -30,
    },
    airplaneIcon: {
        transform: [{rotate: '-30deg'}]
    }
});

export default  TabNavigation;