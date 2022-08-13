import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'

class DateCompent extends Component {

    render(){
        const {text} = this.props
        return (                 
            <View>
                <Text style={styles.LabelText}>{text}</Text>           
                <View style={styles.containerDatepicker}>
                        <View style={styles.containerDatepickerItem}>
                            <Text style={styles.TextMont}>Month</Text>
                            <TextInput
                                style={styles.TextInputstyleDate}
                                placeholder='May' 
                            />
                        </View>
                        <View  style={styles.containerDatepickerItem}>
                            <Text style={styles.TextMont}>Day</Text>
                            <TextInput
                                style={styles.TextInputstyleDate}
                                placeholder='17' 
                            />
                        </View>
                        <View  style={styles.containerDatepickerItem}>
                           <Text style={styles.TextMont}>Year</Text>
                            <TextInput
                                style={styles.TextInputstyleDate}
                                placeholder='1991' 
                            />
                        </View>
                </View>
            </View>      
      );
    }
}
export default DateCompent

