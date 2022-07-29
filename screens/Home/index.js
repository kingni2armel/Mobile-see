import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,Button, StyleSheet } from 'react-native';
import { styles } from './style';
import logo from '../../assets/images/logo.png'
function HomeScreen({navigation}) {
    return ( 
            <View style = {styles.container}>
                 <Image source={logo} style={styles.logo} /> 
                 <Text style={styles.titleWlecome}>Welcome to TAKE N'GO</Text>
                 <TouchableOpacity 
                        onPress={()=>navigation.navigate('Login')}
                        style={styles.btnConnect}>
                        <Text style={styles.textConnect}>Se connecter</Text>
                 </TouchableOpacity>

                 <TouchableOpacity 
                     onPress={()=>navigation.navigate('Register')}
                     style={styles.btnSingup}
                 >     
                        <Text style={styles.textSingup}>S'inscrire</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.btnSingup}>
                        <Text style={styles.textSingup}>S'inscrire avec facebook</Text>
                 </TouchableOpacity>
            </View>     
        );
}

export default HomeScreen;