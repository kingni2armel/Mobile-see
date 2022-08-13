import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'

class ButtonUpdate extends Component {

    render(){
        const {text,onPress} = this.props
        return (                 
            <View style={styles.ContainerButton}>     
               <TouchableOpacity>
                    <Text style={styles.TextButton}>Update</Text>  
                </TouchableOpacity>               
            </View>  
      );
    }
}
export default ButtonUpdate

