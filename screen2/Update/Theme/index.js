import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper';


export default function ThemeScreen({navigation}) {Ionicons
  return (
         <View style={styles.ContainerParent}>
                <View style={styles.ContainerItem}>
                        <Text style={styles.TextCoount}>Sélectionner le thème </Text>
                </View>

                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Clair</Text>
                        </View>
                        <View>
                                <RadioButton/>
                        </View>
                </View>
                <View style={styles.ContainerItem2}>
                        <View>
                                <Text style={styles.Textbtn}>Sombre</Text>
                        </View>
                        <View>
                                 <RadioButton/>
                        </View>
                </View>
        </View>
  );
}

