import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import airplane from  '../../assets/images/airplane.png'
import cameroun from  '../../assets/images/cameroun.png'
import france from  '../../assets/images/france.png'
import { RadioButton } from 'react-native-paper';


export default function PrefereceScreen({navigation}) {Ionicons
  return (
         <View style={styles.ContainerParent}>
                <View style={styles.ContainerItem}>
                        <Text style={styles.TextCoount}>Account Settings</Text>
                </View>

                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Modifier mon email</Text>
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                />
                        </View>
                </View>
                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Modifier mon mot de passe</Text>
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                    onPress={()=>navigation.navigate('Password')}

                                />
                        </View>
                </View>
                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Modifier la langue</Text>
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                    onPress={()=>navigation.navigate('Langue')}
                                    
                                />
                        </View>
                </View>
                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Modifier le thème</Text>
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                    onPress={()=>navigation.navigate('Theme')}

                                />
                        </View>
                </View>
                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Modifier la devise</Text>
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                />
                        </View>
                </View>
                <View style={styles.ContainerItem}>
                        <Text style={styles.TextCoount}>Notifications</Text>
                </View>

                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>
                                        Receive notifications on latest offers and store 
                                </Text>
                                <Text style={styles.TextbtnItem}>
                                         updates
                                </Text>
                            
                        </View>
                        <View>
                                <Ionicons 
                                    name='ios-chevron-forward-sharp'
                                    size={20}
                                    style={styles.Icon}
                                />
                        </View>
                </View>
        </View>
  );
}

