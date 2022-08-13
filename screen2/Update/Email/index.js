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

export default function UpdateEmailScreen() {
  return (
         <View style={styles.ContainerParent}>
               <View style={styles.ContainerParentItem}>
                  <View>
                        <Text style={styles.textDescripition}>
                                Nous vous enverrons un lien pour
                                vérifier votre adresse mail.
                        </Text> 
                  </View>
                  <View style={styles.ContainerItem}>
                        <AntDesign
                                name="mail"
                                size={23}
                                style={styles.Icon}
                        />
                        <TextInput
                                placeholder='Entrer votre adresse mail'
                                style={styles.TextInput}      
                         />
                  </View>
                  <ButtonUpdate/> 
               </View>
        </View>
  );
}

