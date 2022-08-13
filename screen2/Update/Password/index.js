import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { colors } from '../../../styles';
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper';
import ButtonUpdate from '../../../Component/ButtonUpdate';
import {styles} from './style'

export default function UpdatePasswordScreen() {Ionicons
  return (
         <View style={styles.ContainerParent}>
               

                <View style={styles.ContainerItem}>
                        <AntDesign
                                name="lock"
                                size={23}
                                style={styles.Icon}

                        />
                        <TextInput
                            placeholder='Current Password'
                            style={styles.TextInput}
                            secureTextEntry={true}
                        />
                                      
                </View>
                <View style={styles.ContainerItem}>
                        <AntDesign
                                name="lock"
                                size={23}
                                style={styles.Icon}


                        />
                        <TextInput
                            placeholder='New Password'
                            style={styles.TextInput}
                            secureTextEntry={true}
                        /> 
                                      
                </View>
                <View style={styles.ContainerItem}>
                        <AntDesign
                                name="lock"
                                size={23}
                                style={styles.Icon}

                        />
                        <TextInput
                             placeholder='Confirm Password'
                             style={styles.TextInput}
                             secureTextEntry={true}
                        />                
                </View>
               <ButtonUpdate/>
               
        </View>
  );
}

