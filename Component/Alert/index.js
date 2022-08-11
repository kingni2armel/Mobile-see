import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper';


class ButtonCreateAlert extends Component {

    render(){
        const {onPress} = this.props
        return (                 
            <View style={styles.containerButton}>
                <TouchableOpacity 
                        style={styles.btn}
                        onPress={onPress}
                    >
                        <Text style={styles.textContacter}>Créer une alerte</Text>
                        <Ionicons
                            name='notifications-outline'
                            style={styles.IoniconsIcon2Item}
                            size={20}
                        />         
                </TouchableOpacity> 
            </View>      
      );
    }
}
export default ButtonCreateAlert

